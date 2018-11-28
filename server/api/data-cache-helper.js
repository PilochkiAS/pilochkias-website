// const {getCaseStudies, getReviews, getBlogPosts} = require('./index')
//
// let POSTS, CASE_STUDIES, REVIEWS
// const UPDATE_INTERVAL = 5*60*1000
//
// cacheData()
// setInterval(cacheData, UPDATE_INTERVAL)
//
// function cacheData(){
//   const start = Date.now()
//
//   return Promise.all([
//     getCaseStudies(),
//     getBlogPosts(),
//     getReviews(),
//   ]).then(([caseStudies, blogItems, reviews]) => {
//     POSTS = blogItems
//     CASE_STUDIES = caseStudies
//     REVIEWS = reviews
//
//     console.log('caching finished in ', Date.now() - start, 'ms')
//   })
// }
//
// module.exports = {
//   getBlogPosts:()=>{
//     return POSTS.filter(elem => elem.published)
//   },
//   getCaseStudies:()=>CASE_STUDIES,
//   getReviews:()=>REVIEWS,
//
// }
