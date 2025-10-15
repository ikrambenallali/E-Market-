const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');
const errorHandler = require('../middlewares/errorHandler');
const notFound = require('../middlewares/notFound');
const { createCategory ,getAllCategories ,deleteCategory ,updateCategory} = require('../controller/CategoryController');
router.use(logger);
router.use(errorHandler);
router.use(notFound);
router.post('/createCategory', createCategory);
router.get('/getAllCategories', getAllCategories);
router.delete('/deleteCategory/:id', deleteCategory);
router.put('/updateCategory/:id', updateCategory);


module.exports = router;
