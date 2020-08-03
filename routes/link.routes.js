const { Router } = require('express')
const Link = require('../models/Link')
const Transaction = require('../models/Transaction')
const auth = require('../middleware/auth.middleware')
const router = Router()


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
    const transactions = await Transaction.find({ owner: req.user.userId }).limit(3).lean()
    res.json(transactions)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// все транзакции (страница AllTransaction)
router.get('/all/', auth, async (req, res) => {

  try {
    const queryObj = { ...req.query }

    const transactionsFiltres = await Transaction.find(queryObj).limit(50).lean()
    res.json(transactionsFiltres)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// все транзакции по какой-либо категории
router.get('/category/', auth, async (req, res) => {

  try {
    console.log('страница отфильтрованного', req.query)
    const queryObj = { ...req.query }

    const transactionsCategory = await Transaction.find(queryObj).limit(50).lean()
    res.json(transactionsCategory)

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
