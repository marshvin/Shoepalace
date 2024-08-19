const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products with all details
router.get('/products', productController.getAllProducts);

module.exports = router;
