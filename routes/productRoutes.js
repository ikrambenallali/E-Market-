const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const { createProduct } = require('../controller/ProductController');

router.post('/createProduct', createProduct);

module.exports = router;
