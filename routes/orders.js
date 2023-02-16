const router = require('express').Router()
const ordersCtrl = require('../controllers/orders.js')

// Routes
router.post('/', ordersCtrl.create)

module.exports = router