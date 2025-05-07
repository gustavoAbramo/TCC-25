const express = require('express');
const login_controller = require('../controllers/loginController');
const router = express.Router();  


router.post('/login', login_controller.login)

 module.exports = router;