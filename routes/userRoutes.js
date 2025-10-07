const express = require('express');
const { createUser } = require('../controller/UserController');

const router = express.Router();

router.post('/createUser', createUser);

module.exports = router;
