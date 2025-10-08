const express = require('express');
const router = express.Router();
const { createCategory } = require('../controller/CategoryController');

router.post('/createCategory', createCategory);

module.exports = router;
