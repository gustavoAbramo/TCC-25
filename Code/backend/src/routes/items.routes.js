import express from 'express';
import { addItemToStock, getItemsByStorage, deleteItem, updateItemQuantity, searchItemToRecipeController} from '../controllers/item.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Rota para adicionar um item ao estoque
router.post('/items', authMiddleware, addItemToStock);

router.get('/items/:id', authMiddleware, getItemsByStorage);

router.delete('/deleteItems/:id_Item', authMiddleware, deleteItem);

router.put('/changeQuantity/:id_Item', authMiddleware, updateItemQuantity)

router.get('/searchItems', authMiddleware, searchItemToRecipeController)

export default router;