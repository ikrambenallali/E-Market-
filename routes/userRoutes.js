const express = require('express');
const { createUser ,getAllUsers ,deleteUser ,getUserById } = require('../controller/UserController');
const validationMiddleware = require("../middlewares/validation");
const {userSchema} = require("../middlewares/schema");
const validator = new validationMiddleware();


const router = express.Router();

router.post('/createUser',validator.validate(userSchema), createUser);
router.get('/getAllUsers', getAllUsers);
router.delete('/deleteUser/:id', deleteUser);
router.get('/getUserById/:id', getUserById);

module.exports = router;
