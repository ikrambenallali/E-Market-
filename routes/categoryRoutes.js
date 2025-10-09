const express = require('express');
const router = express.Router();
const { createCategory ,getAllCategories ,deleteCategory ,updateCategory} = require('../controller/CategoryController');

router.post('/createCategory', createCategory);
router.get('/getAllCategories', getAllCategories);
router.delete('/deleteCategory/:id', deleteCategory);
router.put('/updateCategory/:id', updateCategory);


module.exports = router;
