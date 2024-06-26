const express = require('express');
const router = express.Router();
const {RegisterUser,UserValidation} = require('../controllers/UserControllers')
router.post('/login',UserValidation);
router.post('/signup',RegisterUser);
module.exports = router;