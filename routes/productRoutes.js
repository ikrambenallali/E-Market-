const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const { createProduct ,getAllProducts } = require('../controller/ProductController');

router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts);
module.exports = router;
