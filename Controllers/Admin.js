const { Order } = require('../models/order');
const { User } = require('../models/user');

// Get all orders
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('user', '-password').populate('productId', 'name');
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
};
