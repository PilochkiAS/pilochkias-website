require('./bootstrap')
const express = require('express')
const cookieParser = require('cookie-parser')
const colors = require('colors')

// require('./api/data-cache-helper')

const app = express()

const index = require('./routes/index')
const products = require('./routes/products')

app.use(cookieParser())
  .use(express.json())
  .use(express.urlencoded({msExtendedCode: false}))
  .use(index)
  .use(products)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
