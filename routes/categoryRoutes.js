const express = require('express');
const router = express.Router();
const { createCategory ,getAllCategories ,deleteCategory} = require('../controller/CategoryController');

router.post('/createCategory', createCategory);
router.get('/getAllCategories', getAllCategories);
router.delete('/deleteCategory/:id', deleteCategory);


module.exports = router;
