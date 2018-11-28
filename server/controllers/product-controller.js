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
   *  POST /api/product
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
      const product = await Products.findById(id)

      if (!product) new Error('Unable to find the product you are looking for.')

      let data = await Products.deleteOne({_id: ObjectId(id)});

      if(data.ok === 1){
        res.send({
          data: 'Product deleted successfully.'
        })
      }else{
        new Error('An error occurred.')
      }
    } catch (err) {
      res.status(500).send({ error: { message: err.message, info: err }})
    }
  },
}
