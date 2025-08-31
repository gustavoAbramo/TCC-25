import express from 'express';
import sendEmail from '../controllers/sendEmail.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/email/send", authMiddleware, sendEmail);

export default router;