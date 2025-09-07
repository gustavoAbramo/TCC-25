import express from 'express';
import { getUserHistory } from '../controllers/history.controller.js'; 
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/myHistory", authMiddleware, getUserHistory);

export default router;