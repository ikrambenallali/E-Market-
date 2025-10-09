const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const { createProduct ,getAllProducts ,deleteProduct ,restoreProduct } = require('../controller/ProductController');

router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/restoreProduct', restoreProduct);
module.exports = router;
