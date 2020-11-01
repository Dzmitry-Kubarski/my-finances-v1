const { Router } = require('express')
const Source = require('../models/Source')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/add', auth, async (req, res) => {
  try {
    const { title, total } = req.body

    const source = new Source({
      title, total, owner: req.user.userId
    })

    await source.save()

    res.status(201).json({ source })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


router.get('/', auth, async (req, res) => {
  try {
    const sources = await Source.find({ owner: req.user.userId })
    res.json(sources)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


// переход на индивидуальный счёт
router.get('/:sourceId', auth, async (req, res) => {
  try {
    const { sourceId } = req.params
    const source = await Source.findById(sourceId)

    res.json(source)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


// удаление счёта (работает)
// router.post('/delete', auth, async (req, res) => {
//   try {
//     const { _id } = req.body

//     const transaction = await Source.findById(_id).remove()

//     // await transaction.save()

//     // res.status(201).json({ transaction })
//     res.redirect('/')

//   } catch (e) {
//     res.status(500).json({ message: 'Что-то пошло не так...' })
//   }
// })


// удаление счёта (тест query) - работает
router.delete('/delete/:sourceId', auth, async (req, res) => {
  try {
    const { sourceId } = req.params
    const transaction = await Source.findById(sourceId).deleteMany()

    res.status(201).json({ transaction })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// редактирование счёта
router.post('/edit', auth, async (req, res) => {
  try {
    const { newTitleSource, sourceId } = req.body

    const source = await Source.findById(sourceId)
    source.title = newTitleSource

    await source.save()
    res.status(201).json({ source })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


// редактирование суммы счёта
router.post('/edit-total', auth, async (req, res) => {
  try {
    const { source, sum, operation } = req.body

    const currentSource = await Source.findOne({ title: source, owner: req.user.userId })

    if (operation === 'расходы') {
      currentSource.total = currentSource.total - +sum
    }
    else if (operation === 'доходы') {
      currentSource.total = currentSource.total + +sum
    }

    await currentSource.save()
    res.status(201).json(currentSource)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router
