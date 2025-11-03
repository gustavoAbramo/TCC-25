import express from 'express';
import {createRecipe, prepareRecipe, getRecipesByUser, deleteRecipe} from '../controllers/recipe.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/createRecipe", authMiddleware, createRecipe);
router.post("/prepareRecipe/:id_recipe", authMiddleware, prepareRecipe);
router.get("/myRecipes", authMiddleware, getRecipesByUser);
router.delete("/deleteRecipe/:id_recipe", authMiddleware, deleteRecipe);

export default router;