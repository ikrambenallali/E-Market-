const express = require('express');
const { createUser ,getAllUsers } = require('../controller/UserController');
const validationMiddleware = require("../middlewares/validation");
const {userSchema} = require("../middlewares/schema");
const validator = new validationMiddleware();


const router = express.Router();

router.post('/createUser',validator.validate(userSchema), createUser);
router.get('/getAllUsers', getAllUsers);

module.exports = router;
