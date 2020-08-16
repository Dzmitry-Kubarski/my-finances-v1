const { Router } = require('express')
const config = require('config')
const Source = require('../models/Source')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/add', auth, async (req, res) => {
  try {
    const { title, total } = req.body
    console.log('title', title)
    console.log('total', total)

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


// удаление счёта (тест query)
router.delete('/:sourceId', auth, async (req, res) => {
  try {
    const { sourceId } = req.params
    const transaction = await Source.findById(sourceId).remove()

    res.status(201).json({ transaction })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


module.exports = router
