const express = require('express');
const router = express.Router();
const roleBasedAccess = require('../middleware/roleBasedAccess');
const { getAllUsers } = require('../controllers/users');
const { getAllOrders } = require('../controllers/orders');
const { Admin } = require('../Models/admin');

// Get all users (admin only)
router.get('/users', roleBasedAccess(['admin']), getAllUsers);

// Get all orders (admin only)
router.get('/orders', roleBasedAccess(['admin']), getAllOrders);


module.exports = router;
