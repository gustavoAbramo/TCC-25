import express from 'express';
import sendEmail from '../controllers/sendEmailController.js';
//const middleware_login = require("../middlewares/solicitacaoLogin");

const router = express.Router();

//router.post("/email/send", middleware_login.acesso_login, sendEmail());

module.exports = router;