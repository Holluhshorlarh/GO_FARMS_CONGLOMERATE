const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please provide a name for this product."],
    unique: true,
    trim: true,
    maxLength: [20, "Name must be less than 20 characters."],
  },
  productCategory: {
    type: String,
    required: [true, "Please provide a category for this product."],
    enum: ["Vegetables", "Fruits", "Dairy Products", "Meat Products", "Poultry", "Fish and Seafood", "Grains and Cereals", "Nuts and Seeds", "Herbs and Spices", "Other"],
  },
  productPrice: {
    type: Number,
    required: [true, "Please provide a price for this product."],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
