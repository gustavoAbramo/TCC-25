const ItemModel = require('../models/item.model'); // Importa o modelo do item

// Função para adicionar um item ao estoque
const addItemToStock = async (req, res) => {
    try {
        const { name, quantity, price } = req.body;

        // Valida os campos obrigatórios
        if (!name || !quantity || !price) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios: name, quantity, price.' });
        }

        // Cria um novo item no banco de dados
        const newItem = await ItemModel.create({
            name,
            quantity,
            price,
        });

        return res.status(201).json({ message: 'Item adicionado com sucesso!', item: newItem });
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
        return res.status(500).json({ message: 'Erro ao adicionar item ao estoque.' });
    }
};

module.exports = {
    addItemToStock,
};