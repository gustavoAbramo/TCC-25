import express from 'express';
import { changeUserName, forgotPassword, resetPassword, getCurrentUser   } from '../controllers/user.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/changeName', authMiddleware, changeUserName );

router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);

router.get('/me', authMiddleware, getCurrentUser);

export default router