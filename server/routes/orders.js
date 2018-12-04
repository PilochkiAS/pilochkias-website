const express = require('express');
const moment = require('moment');
const controller = require('../controllers/order-controller')

const router = express.Router();

router.use(function timeLog(req, res, next) {
  // console.log('==>'.green ,'Time: '.cyan, moment().format('MM.DD.YY, h:mm:ss a'));
  next();
});

router.get('/orders', controller.getOrders) // get all orders with filter
router.get('/order/:id', controller.getOrderById) // get one order by id
router.post('/orders', controller.createOrUpdateOrder) // create one order
router.put('/order/:id', controller.createOrUpdateOrder) // update one order
router.delete('/order/:id', controller.removeOrder) // remove one order

module.exports = router


