const yenv = require('yenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const env = yenv()

module.exports = env
