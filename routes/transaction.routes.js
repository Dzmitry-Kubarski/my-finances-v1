const { Router } = require('express')
const Link = require('../models/Link')
const Transaction = require('../models/Transaction')
const auth = require('../middleware/auth.middleware')
const router = Router()

const { Schema, model, Types, ObjectId } = require('mongoose')



// новая транзакция
router.post('/add', auth, async (req, res) => {
  try {
    const { operation, source, sum, category, date, comment } = req.body

    const transaction = new Transaction({
      operation, source, sum, category, date, comment, owner: req.user.userId
    })

    await transaction.save()

    res.status(201).json({ transaction })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})

// все транзакции (страница HOME)
router.get('/', auth, async (req, res) => {

  try {
    const transactions = await Transaction.find({ owner: req.user.userId }).sort({ $natural: -1 }).limit(5).lean()
    res.json(transactions)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// все транзакции (страница AllTransaction)
router.get('/all/', auth, async (req, res) => {

  try {
    // const queryObj = { ...req.query }

    const transactionsAll = await Transaction.find({ owner: req.user.userId }).sort({ $natural: -1 }).limit(50).lean()
    res.json(transactionsAll)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// транзакции, которыми управляет фильтр
router.get('/category/', auth, async (req, res) => {

  try {
    const queryObj = { owner: req.user.userId, ...req.query }

    const transactionsFiltres = await Transaction.find(queryObj).sort({ $natural: -1 }).limit(50).lean()
    res.json(transactionsFiltres)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// транзакции для статистики (расходы)
router.get('/expenses', auth, async (req, res) => {

  try {
    const user = req.user.userId

    const transactionsExpenses = await Transaction.aggregate([
      { $match: { owner: Types.ObjectId(user), operation: 'расходы' } },
      { $group: { _id: '$category', sum: { $sum: '$sum' } } },
    ])

    res.json(transactionsExpenses)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// транзакции для статистики (доходы)
router.get('/revenue', auth, async (req, res) => {

  try {
    const user = req.user.userId

    const transactionsRevenue = await Transaction.aggregate([
      { $match: { owner: Types.ObjectId(user), operation: 'доходы' } },
      { $group: { _id: '$category', sum: { $sum: '$sum' } } },
    ])

    res.json(transactionsRevenue)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})



// оригинальная версия
// router.get('/:id', auth, async (req, res) => {
//   try {
//     const link = await Link.findById(req.params.id)
//     res.json(link)
//   } catch (e) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

module.exports = router
