const express = require('express');
const {
  createProduct,
  getAllFarmProducts,
  getProductsByCategory 
} = require('../Controllers/farmProductController');

const router = express.Router();

// Farm product routes
router.route('/farm-products')
  .get(getAllFarmProducts)
  .post(createProduct);

router.route('/products/category/:category')
  .get(getProductsByCategory);

module.exports = router;
