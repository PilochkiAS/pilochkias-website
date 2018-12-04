const api = require('../api/index')

module.exports = {
  /**
   *  GET /api/products
   * */
  async getProducts (req, res, next) {
    try {
      const data = await api.getAllProducts()

      res.send({ data })
    } catch (err) {
      res.status(500).send({ error: { message: err.message, info: err }})
    }
  },
  /**
   *  GET /api/product/:id
   * */
  async getProductById (req, res, next) {

  }
}
