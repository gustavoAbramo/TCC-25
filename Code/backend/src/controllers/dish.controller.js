import {
  createRecipeService,
  prepareRecipeService,
  getRecipesByUserService,
} from "../services/recipe.service.js";

export async function createRecipe(req, res) {
  const id_user = req.user?.id_user;
  const data = req.body;

  try {
    const recipe = await createRecipeService(id_user, data);
    res.status(201).json({ success: true, recipe });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function prepareRecipe(req, res) {

  const id_user = req.user?.id_user;
  const recipeId = parseInt(req.params.id_recipe, 10);

  if (!recipeId) {
    return res.status(400).json({ success: false, message: "ID da receita inválido" });
  }

  try {
    const result = await prepareRecipeService(id_user, recipeId);
    res.json({ success: true, result });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getRecipesByUser(req, res) {
  const id_user = req.user?.id_user;

  try {
    const recipe = await getRecipesByUserService(id_user);
    res.json({ success: true, recipe });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}
