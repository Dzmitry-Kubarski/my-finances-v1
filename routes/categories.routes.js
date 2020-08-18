const { Router } = require('express')
const config = require('config')
const Source = require('../models/Source')
const Category = require('../models/Category')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/add', auth, async (req, res) => {
  try {
    const { title, operation } = req.body

    const category = new Category({
      title, operation, owner: req.user.userId
    })

    await category.save()

    res.status(201).json({ category })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


router.get('/', auth, async (req, res) => {
  try {
    const categories = await Category.find({ owner: req.user.userId })
    res.json(categories)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


// переход на индивидуальную категорию
router.get('/:categoryId', auth, async (req, res) => {
  try {
    const { categoryId } = req.params
    const category = await Category.findById(categoryId)

    res.json(category)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


// удаление категории
router.delete('/delete/:categoryId', auth, async (req, res) => {
  try {
    const { categoryId } = req.params
    const category = await Category.findById(categoryId).remove()

    res.status(201).json({ category })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так...' })
  }
})


// редактирование категории
router.post('/edit', auth, async (req, res) => {
  try {
    const { newTitleCategory, categoryId } = req.body

    const сategory = await Category.findById(categoryId)
    сategory.title = newTitleCategory

    await сategory.save()
    res.status(201).json({ сategory })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router
