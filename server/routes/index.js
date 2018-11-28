const { Router } = require('express')
const {getCaseStudies, getReviews, getBlogPosts} = require('../controllers/index')
const router = Router()

router.get('/case-studies', getCaseStudies)

module.exports = router
