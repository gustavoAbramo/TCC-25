import { createItemService, getItemsByStorageService } from '../services/item.service.js';
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