import express from 'express';
import sendEmail, { notifyExpiringItems } from '../controllers/sendEmail.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/email/send", authMiddleware, sendEmail);
router.post("/email/notify-expiring", authMiddleware, notifyExpiringItems);

export default router;