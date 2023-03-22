const express = require('express');
const router = express.Router();
const roleBasedAccess = require('../middleware/roleBasedAccess');
const { getAllOrders } = require('../controllers/orders');
const { Admin } = require('../Models/admin');

// Get all orders (admin only)
router.get('/orders', roleBasedAccess(['admin']), getAllOrders);

module.exports = router;
