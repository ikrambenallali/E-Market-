const Product = require('../models/Product');
const express = require('express');
const router = express.Router();
const { createProduct ,getAllProducts ,deleteProduct ,restoreProduct ,getProductById,updateProduct } = require('../controller/ProductController');

router.post('/createProduct', createProduct);
router.get('/getAllProducts', getAllProducts);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/restoreProduct', restoreProduct);
router.get('/getProductById/:id', getProductById);
router.put('/updateProduct/:id', updateProduct);
module.exports = router;
