import { createItemService, getItemsByStorageService, deleteItemService } from '../services/item.service.js';
import { createItemSchema } from '../utils/item.util.js';

export const addItemToStock = async (req, res) => {
  try {
    const data = createItemSchema.parse(req.body);
    const id_user = req.user?.id_user;

    if (!id_user) {
      return res.status(401).json({ message: 'Usuário não autenticado.' });
    }

    const newItem = await createItemService({
      ...data,
      id_user,
    });

    return res.status(201).json({
      message: 'Item adicionado com sucesso!',
      item: newItem,
    });

  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ errors: error.errors });
    }

    if (error.message.includes('não tem permissão')) {
      return res.status(403).json({ message: error.message });
    }

    if (error.message.includes('já existe')) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({ message: 'Erro interno ao adicionar item.' });
  }
};


export async function getItemsByStorage(req, res) {
  try {
    const { id } = req.params; // id do estoque
    const items = await getItemsByStorageService(Number(id));
    return res.status(200).json(items);
  } catch (error) {
    console.error("Erro ao buscar itens por storage:", error);
    return res.status(500).json({ message: 'Erro interno ao buscar itens.' });
  }
}

export async function deleteItem(req, res) {
  try {
    const { id_Item } = req.params;
    const id_user = req.user?.id_user;

    if (!id_user) {
      return res.status(401).json({ message: "Usuário não autenticado." });
    }

    if (!id_Item || isNaN(Number(id_Item))) {
      return res.status(400).json({ message: "ID do item inválido." });
    }

    const result = await deleteItemService(Number(id_Item), id_user);

    return res.status(200).json(result);

  } catch (error) {

    if (error.message && error.message.includes("não tem permissão")) {
      return res.status(403).json({ message: error.message });
    }

    if (error.message && error.message.includes("não encontrado")) {
      return res.status(404).json({ message: error.message });
    }

    return res.status(500).json({ message: "Erro interno ao deletar item." });
  }
}
