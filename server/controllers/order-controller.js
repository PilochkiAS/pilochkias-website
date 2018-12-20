const api = require('../api/index')

module.exports = {
  /**
   *  POST /api/orders
   * */
  async createOrUpdateOrder (req, res, next) {
    try {
      const data = req.body

      const order = {
        products: data.products,
        customer: {
          fullName: data.customer.fullName,
          phone: data.customer.phone,
          email: data.customer.email,
          address: data.customer.address
        },
        engraving: data.engraving,
        isDone: false
      }

      res.send({ data: await api.createNewOrder(order) })

    } catch (err) {
      res.status(500).send({ error: { message: err.message, info: err }})
    }
  }
}
