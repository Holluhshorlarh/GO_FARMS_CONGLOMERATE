const express = require("express");
const router = express.Router();
const { createOrder, updateOrder, deleteOrder} = require("../Controllers/userOrder");
const {authMiddleware} = require("../Middleware/auth")

// Route to create a new order
router.post("/orders/:productId", authMiddleware,createOrder);
router.put("/orders/:orderId", authMiddleware, updateOrder);
router.delete("/orders/:orderId", authMiddleware, deleteOrder)










module.exports = router;