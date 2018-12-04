const { Router } = require('express')
const router = Router()

router.get('/viber/webhook', (req, res, next) => {
  res.send({
    data: 'test'
  })
})
router.post('/viber/webhook', (req, res, next) => {
  console.log('/viber/webhook', req.body)
  res.send({
    data: req.body
  })
})

module.exports = router
