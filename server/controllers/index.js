const axios = require('axios')
const cacheHelper = require('../api/data-cache-helper')

/**
 *  GET /api/case-studies
 * */
let getCaseStudies = async (req, res, next) => {
    res.send(cacheHelper.getCaseStudies())
}
/**
 *  GET /api/reviews
 * */
let getReviews = async (req, res, next) => {
  res.send(cacheHelper.getReviews())
}
/**
 *  GET /api/blog-posts
 * */
let getBlogPosts = async (req, res, next) => {
  res.send(cacheHelper.getBlogPosts())
}

module.exports = {getCaseStudies, getReviews, getBlogPosts};
