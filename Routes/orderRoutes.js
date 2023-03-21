const express = require("express");
const router = express.Router();
const { createOrder } = require("../Controllers/userOrder");

// Route to create a new order
router.post("/products/:productId", createOrder);
module.exports = router;