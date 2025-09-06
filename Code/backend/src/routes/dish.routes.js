import express from 'express';
import {createDish, prepareDish, getDishesByUser} from '../controllers/dish.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/createDish", authMiddleware, createDish);
router.post("/prepareDish/:id_dish", authMiddleware, prepareDish);
router.get("/myDishes", authMiddleware, getDishesByUser);

export default router;