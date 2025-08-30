import express from 'express';
import { addItemToStock, getItemsByStorage, deleteItem } from '../controllers/item.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Rota para adicionar um item ao estoque
router.post('/items', authMiddleware, addItemToStock);

router.get('/items/:id', authMiddleware, getItemsByStorage);

router.delete('/deleteItems/:id_Item', authMiddleware, deleteItem);

export default router;