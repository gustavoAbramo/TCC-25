const express = require('express');
const sendEmail = require('../controllers/sendEmailController.js');
//const middleware_login = require("../middlewares/solicitacaoLogin");

const router = express.Router();

//router.post("/email/send", middleware_login.acesso_login, sendEmail());

module.exports = router;