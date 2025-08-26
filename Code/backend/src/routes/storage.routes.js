import express from 'express';
import {createStorage, seeStorages} from '../controllers/storage.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/createStorage', authMiddleware, createStorage );

router.get('/seeStorage', authMiddleware, seeStorages)

export default router