const { Router } = require('express')
const config = require('config')
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


module.exports = router
