import {
  createDishService,
  prepareDishService,
  getDishesByUserService,
} from "../services/dish.service.js";

export async function createDish(req, res) {
  try {
    const id_user = req.user?.id_user;
    const data = req.body;

    const dish = await createDishService(id_user, data);
    res.status(201).json({ success: true, dish });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

export async function prepareDish(req, res) {

  const id_user = req.user?.id_user;
  const dishId = parseInt(req.params.id_dish, 10);

  if (!dishId) {
    return res.status(400).json({ success: false, message: "ID do prato inválido" });
  }

  try {
    const result = await prepareDishService(id_user, dishId);
    res.json({ success: true, result });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getDishesByUser(req, res) {
  const id_user = req.user?.id_user;

  try {
    const dishes = await getDishesByUserService(id_user);
    res.json({ success: true, dishes });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}
