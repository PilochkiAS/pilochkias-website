const axios = require('axios')
const Products = require('../models/products')
const { Types } = require('mongoose')
const ObjectId = Types.ObjectId;

module.exports = {
  /**
   *  GET /api/products
   * */
  async getProducts (req, res, next) {
    const products = Products.find()

    products.exec(async (err, docs) => {
      if (err) {
        res.status(500).send({error: {message: err.message, info: err }})
        return
      }

      res.send({
        data: docs
      })
    })
  },
  /**
   *  GET /api/product/:id
   * */
  async getProductById (req, res, next) {

    await Products.findOne({_id: ObjectId(req.params.id)}, function (err, doc) {
      if (err) {
        res.status(500).send({ error: {message: err.message, info: err }})
        return
      }

      res.send({
        data: doc
      })
    })
  },
  /**
   *  POST /api/products
   *  --------OR---------
   *  PUT /api/product/:id
   * */
  async createOrUpdateProduct (req, res, next) {
    try {
      const { id } = req.params
      const data = req.body
      let product = {}

      if (!data.title || !data.description || !data.price || !data.discount || !data.isPublished) {
        new Error('Wrong data')
      }

      if (id) {
        Products.findByIdAndUpdate(id, { $set: data}, { new: true }, function (err, doc) {
          if (err) new Error(err.message)
          res.send(doc)
        })
      } else {
        product = new Products(data)

        res.send({
          data: await product.save()
        })
      }

    } catch (err) {
      res.status(500).send({ error: { message: err.message, info: err }})
    }
  },
  /**
   *  DELETE /api/product/:id
   * */
  async removeProduct (req, res, next) {
    try {
      const {id} = req.params

      Products.findById(id, (err, doc) => {
        if (!doc || err) {
          res.status(500).send({ error: { message: 'Unable to remove the product.'}})
          return
        }

        doc.remove((err, doc) => {
          if (err) {
            res.status(500).send({ error: { message: 'Error occurred.'}})
            return
          }

          res.send({
            data: 'Product deleted successfully.'
          })
        });
      })
    } catch (err) {
      res.status(500).send({ error: { message: err.message, info: err }})
    }
  },
}
