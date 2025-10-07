const express = require('express');
const { createUser ,getAllUsers } = require('../controller/UserController');

const router = express.Router();

router.post('/createUser', createUser);
router.get('/getAllUsers', getAllUsers);

module.exports = router;
