import { createItemService, createItemsService } from '../services/item.service.js';
import { createItemSchema } from '../utils/item.util.js';
import { z } from 'zod';

const singleItemSchema = createItemSchema;
const multipleItemsSchema = z.array(createItemSchema);

export const addItemToStock = async (req, res) => {
    try {
      const data = req.body;
  
      // Adiciona o ID do usuário autenticado (geralmente obtido do token JWT)
      const id_user = req.user.id_user; // Certifique-se de que o middleware de autenticação adiciona `req.user`
  
      // Passa o ID do usuário para o service
      const payload = Array.isArray(data)
        ? data.map(item => ({ ...item, id_user }))
        : { ...data, id_user };
  
      let result;
      if (Array.isArray(data)) {
        result = await createItemsService(payload);
        return res.status(201).json({
          message: `${result.length} itens adicionados com sucesso!`,
          items: result,
        });
      } else {
        const newItem = await createItemService(payload);
        return res.status(201).json({
          message: 'Item adicionado com sucesso!',
          item: newItem,
        });
      }
    } catch (error) {
      console.error('Erro ao adicionar item(s):', error);
  
      if (error.message.includes('não tem permissão')) {
        return res.status(403).json({ message: error.message });
      }
  
      if (error.message.includes('já existe')) {
        return res.status(400).json({ message: error.message });
      }
  
      return res.status(500).json({ message: 'Erro ao adicionar item(s) ao estoque.' });
    }
  };