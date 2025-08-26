import express from 'express';
import { addItemToStock } from '../controllers/item.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// Rota para adicionar um item ao estoque
router.post('/items', authMiddleware, addItemToStock);

// Outras rotas podem ser adicionadas aqui, como listar, atualizar ou deletar itens
// Exemplo:
// router.get('/items', listItems);
// router.get('/items/:id', getItemById);
// router.put('/items/:id', updateItem);
// router.delete('/items/:id', deleteItem);

export default router;