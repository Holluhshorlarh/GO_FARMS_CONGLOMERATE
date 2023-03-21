const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, 
  productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FarmProduct',
      required: true
    },
    productName: {
        type: String,
    },
    quantity: {
      type: Number,
      required: true
    },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
