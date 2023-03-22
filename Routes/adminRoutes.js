const express = require('express');
const router = express.Router();
const roleBasedAccess = require('../Middleware/roleBasedAccess');
const { getAllUsers } = require('../Controllers/Admin');
const { getAllOrders } = require('../Controllers/Admin');

// Get all users (admin only)
router.get('/users', roleBasedAccess(['admin']), getAllUsers);

// Get all orders (admin only)
router.get('/orders', roleBasedAccess(['admin']), getAllOrders);


module.exports = router;
