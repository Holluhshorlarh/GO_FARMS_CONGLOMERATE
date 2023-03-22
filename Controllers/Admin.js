const { Order } = require('../Models/orderModel');
const { User } = require('../Models/userModel');

// Get all orders
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().populate('user', '-password').populate('productId', 'name');
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
};
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };