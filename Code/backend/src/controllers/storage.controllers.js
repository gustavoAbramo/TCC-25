import { PrismaClient } from '@prisma/client';
const bd = new PrismaClient();

export const createStorage = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Nome é obrigatório" });
  try{
    const newStorage = await bd.Stock.create({ data: { name }});
    res.status(201).json(newStorage);
  } catch (error) {
    res.status(500).json({ error: "erro ao criar estoque"});
  }
};