const Joi = require('joi');
const Product = require("../Models/farmProductModel");
const User = require("../Models/userModel");
const Order = require("../Models/orderModel");

exports.createOrder = async (req, res, next) => {
  try {
    // Validate the request body using Joi
    const schema = Joi.object({
      quantity: Joi.number().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      throw new Error(error.details[0].message);
    }

    // Get the user ID from the request object
    const userId = req.user._id;

    // Get the product ID from the request object
    const productId = req.params.productId;

    // Find the product by ID and check if it exists
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }

    // Calculate the total price of the order
    const price = product.price * value.quantity;

    // Find the user by ID and check if it exists
    const user = await User.findById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    // Create a new order and save it to the database
    const order = new Order({
      user: userId,
      products: [{ productId: productId, quantity: value.quantity }],
      price,
    });
    await order.save();

    // Update the user's orders list
    user.orders.push(order._id);
    await user.save();

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
