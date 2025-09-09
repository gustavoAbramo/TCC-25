import { createDishService, prepareDishService, getDishesByUserService } from '../services/dish.service.js';

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
  try {
    const id_user = req.user?.id_user;
    const dishId = parseInt(req.params.id_dish, 10);
    if (!dishId) throw new Error("ID do prato inválido");

    const result = await prepareDishService(id_user, dishId);
    res.json({ success: true, result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
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
