import express from 'express';
import {changeUserName} from '../controllers/user.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/changeName', authMiddleware, changeUserName );

export default router