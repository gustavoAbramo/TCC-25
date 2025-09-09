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
    if (error.message.includes("não tem permissão")) {
      return res.status(403).json({ success: false, message: error.message });
    }

    if (error.message.includes("já existe")) {
      return res.status(400).json({ success: false, message: error.message });
    }

    console.error(error); // log para ajudar no debug
    return res.status(500).json({ success: false, message: "Erro interno ao adicionar item." });
  }
};

export async function getItemsByStorage(req, res) {
  try {
    const { id } = req.params; // id do estoque
    const items = await getItemsByStorageService(Number(id));
    return res.status(200).json({ success: true, items });
  } catch (error) {
    console.error("Erro ao buscar itens por storage:", error);
    return res.status(500).json({ success: false, message: "Erro interno ao buscar itens." });
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
    if (error.message && error.message.includes("não tem permissão")) {
      return res.status(403).json({ success: false, message: error.message });
    }

    if (error.message && error.message.includes("não encontrado")) {
      return res.status(404).json({ success: false, message: error.message });
    }

    return res.status(500).json({ success: false, message: "Erro interno ao deletar item." });
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
