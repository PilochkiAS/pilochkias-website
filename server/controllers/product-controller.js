const api = require('../api/index')

module.exports = {
  /**
   *  GET /api/products
   * */
  async getProducts (req, res, next) {
    try {
      const { price } = req.query

      let query = []
      if (price) query.push('price=' + price)

      const data = await api.getAllProducts(query)

      res.send({ data })
    } catch (err) {
      console.log('==> err'.green, err)
      res.status(500).send({ error: { message: err.message, info: err }})
    }
  },
  /**
   *  GET /api/product/:id
   * */
  async getProductById (req, res, next) {

  }
}
