const mongoose = require('mongoose');
const FarmProduct = require('../models/farmProductModel');

exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const farmProducts = await FarmProduct.find({ productCategory: category });
    res.status(200).json({
      success: true,
      data: farmProducts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { productName } = req.body;
    const existingProduct = await FarmProduct.findOne({ productName });

    if (existingProduct) {
      return res.status(409).json({
        success: false,
        error: "This product already exists.",
      });
    }

    const newProduct = new FarmProduct(req.body);
    const farmProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      data: farmProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllFarmProducts = async (req, res) => {
  try {
    const farmProducts = await FarmProduct.find();
    res.status(200).json({
      success: true,
      data: farmProducts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};
