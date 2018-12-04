const express = require('express');
const moment = require('moment');
const controller = require('../controllers/order-controller')

const router = express.Router();

router.use(function timeLog(req, res, next) {
  // console.log('==>'.green ,'Time: '.cyan, moment().format('MM.DD.YY, h:mm:ss a'));
  next();
});

router.post('/orders', controller.createOrUpdateOrder) // create one order

module.exports = router


