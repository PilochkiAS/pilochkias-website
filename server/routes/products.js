const express = require('express');
const moment = require('moment');
const controller = require('../controllers/product-controller')
const env = require('../env');

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('==>'.green ,'Time: '.cyan, moment().format('MM.Do.YY, h:mm:ss a'));
  next();
});

// test db password - gBzBacAVidqx4Uz

router.get('/products', controller.getProducts) // get all products with filter
router.get('/product/:id', controller.getProductById) // get one product by id
router.post('/products', controller.createOrUpdateProduct) // create one product
router.put('/product/:id', controller.createOrUpdateProduct) // update one product
router.delete('/product/:id', controller.removeProduct) // remove one product

module.exports = router


