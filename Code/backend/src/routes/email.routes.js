import express from 'express';
import sendEmail, { notifyExpiringItems, sendContactEmail } from '../controllers/sendEmail.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/email/send", sendEmail);
router.post("/email/notify-expiring", authMiddleware, notifyExpiringItems);
router.post("/email/contact", sendContactEmail());


export default router;