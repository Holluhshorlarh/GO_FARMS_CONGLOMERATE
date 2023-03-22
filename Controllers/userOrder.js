const Joi = require('joi');
const Product = require("../Models/farmProductModel");
const User = require("../Models/userModel");
const Order = require("../Models/orderModel");

exports.createOrder = async (req, res) => {
  try {
    // Get the user ID from the request object
    const id = req.user.id;
    const {productName, quantity, price} = req.body
    const productId = req.params.productId
    // Find the product by ID and check if it exists
    const product = await Product.findById(productId);
    if (!product) {
    return res.status(400).json({message: "Product not found"})
    }
    if (productName !== product.productName ) {
        return res.status(400).json({message:"Invalid product"})
    }
    // Calculate the total price of the order
    const totalPrice = price * quantity;

    // Find the user by ID and check if it exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({message: "User does not exist"})
    }

    // Create a new order and save it to the database
    const order = new Order({
      user: user._id,
      productName: productName,
      quantity: quantity,
      price: totalPrice,
      productId: product.id
    });
    await order.save();
   return res.status(201).json(order);
} catch (error) {
    return res.status(201).json({error});
  }
};

exports.updateOrder = async (req, res) => {
    try {
        const {quantity, price} = req.body
        const orderId = req.params.orderId 
        const totalPrice = quantity * price
        const order = await Order.findByIdAndUpdate(orderId, {quantity, price: totalPrice}, {new: true});
        if (!orderId) {
            return res.status(400).json({message: "Order not found"})
        }
        return res.status(200).json({message: "Order updated successfully!"})
    } catch  (error) {
        return res.status(201).json({error});
      }
    };
    exports.deleteOrder = async (req, res) => {
        try {
          const { orderId } = req.params;
          const order = await Order.findById(orderId);
          if (!order) {
            return res.status(400).json({ message: "Invalid order" });
          }
          await Order.findByIdAndDelete(orderId);
          return res.status(200).json({ message: "Order deleted successfully!" });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
      };
    