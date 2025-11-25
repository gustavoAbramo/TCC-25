import express from 'express';
import {generateLinkCode, verifyCode, getUserProfile} from '../controllers/alexa.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/link-code', authMiddleware,  generateLinkCode );

router.post('/verify-code', verifyCode );

router.get('/profile', authMiddleware, getUserProfile );

export default router;