import { createItemService, createItemsService } from '../services/item.service.js';
import { createItemSchema } from '../utils/item.util.js';
import { z } from 'zod';

const singleItemSchema = createItemSchema;
const multipleItemsSchema = z.array(createItemSchema);

export const addItemToStock = async (req, res) => {
  try {
    const data = req.body;

    // Detecta se é array ou objeto e valida
    let validatedData;
    let result;

    if (Array.isArray(data)) {
      validatedData = multipleItemsSchema.parse(data);
      result = await createItemsService(validatedData);
      return res.status(201).json({
        message: `${result.count} itens adicionados com sucesso!`
      });
    } else {
      validatedData = singleItemSchema.parse(data);
      const newItem = await createItemService(validatedData);
      return res.status(201).json({
        message: 'Item adicionado com sucesso!',
        item: newItem
      });
    }
  } catch (error) {
    console.error('Erro ao adicionar item(s):', error);

    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Erro de validação', errors: error.errors });
    }

    return res.status(500).json({ message: 'Erro ao adicionar item(s) ao estoque.' });
  }
};
