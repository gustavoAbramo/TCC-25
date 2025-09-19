import {
  createItemService,
  getItemsByStorageService,
  deleteItemService,
  updateItemQuantityService,
} from "../services/item.service.js";
import { createItemSchema } from "../utils/item.util.js";

export const addItemToStock = async (req, res) => {
  const { error, value: data } = createItemSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const messages = error.details.map((detail) => detail.message);
    return res.status(400).json({
      success: false,
      message: messages.join("; "),
      errors: messages,
    });
  }

  try {
    const id_user = req.user?.id_user;

    if (!id_user) {
      return res.status(401).json({ success: false, message: "Usuário não autenticado." });
    }

    const newItem = await createItemService({
      ...data,
      id_user,
    });

    return res.status(201).json({
      success: true,
      message: "Item adicionado com sucesso!",
      item: newItem,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Erro interno ao adicionar item.",
    }
    );}
};
export async function getItemsByStorage(req, res) {
  const { id } = req.params;
  
  if (isNaN(Number(id))) {
    return res.status(400).json({ success: false, message: "ID do estoque inválido." });
  }

  try {

    const items = await getItemsByStorageService(Number(id));
    return res.status(200).json({ success: true, items });
    
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Erro interno ao buscar itens do estoque.",
    });
  }
}

export async function deleteItem(req, res) {
  try {
    const { id_Item } = req.params;
    const id_user = req.user?.id_user;

    if (!id_user) {
      return res.status(401).json({ success: false, message: "Usuário não autenticado." });
    }

    if (!id_Item || isNaN(Number(id_Item))) {
      return res.status(400).json({ success: false, message: "ID do item inválido." });
    }

    const result = await deleteItemService(Number(id_Item), id_user);

    return res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Erro interno ao deletar item.",
    });
  }
}

export async function updateItemQuantity(req, res) {
  try {
    const { id_Item } = req.params;
    const { quantityChange } = req.body;
    const id_user = req.user?.id_user; // pega do token

    if (!id_user)
      return res.status(401).json({ success: false, message: "Usuário não autenticado" });

    const updatedItem = await updateItemQuantityService(
      Number(id_Item),
      id_user,
      Number(quantityChange)
    );

    res.json({ success: true, item: updatedItem });
  } catch (err) {
    console.error("Erro ao atualizar quantidade:", err);
    res.status(500).json({ success: false, message: "Erro interno no servidor" });
  }
}
