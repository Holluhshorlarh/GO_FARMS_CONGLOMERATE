// const { Order } = require("../models/orderModel");
// const Joi = require("joi");
// async function createOrder(req, res, next) {
//   try {
//     const userId = req.user._id; // get user ID from authenticated request

//     // validate request body using Joi
//     const schema = Joi.object({
//       products: Joi.array().items(
//         Joi.object({
//           name: Joi.string().required(),
//         })
//       ).min(1).required()
//     });
//     const { error, value } = schema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ error: error.details[0].message });
//     }
//     const { products } = value;

//     // calculate total price of all products selected by user
//     const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

//     // create order object
//     const order = new Order({
//       user: userId,
//       product: products,
//       quantity: products.length,
//       price: totalPrice
//     });

//     // save order to database
//     await order.save();

//     res.status(201).json(order);
//   } catch (err) {
//     next(err);
//   }
// }

