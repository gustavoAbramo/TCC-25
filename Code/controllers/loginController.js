// este arquivo vai conter a lógica de autenticação do usuário
//vou fazer a funçao para registrar aqui
// controllers/authController.js
//import prisma from '../prismaClient.js'
const { PrismaClient }= require('../generated/prisma')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const { name, senha } = req.body;
  
    // 1. Verifica se o usuário existe no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        name: name
      }
    });
  
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    // 2. Compara a senha fornecida com a senha criptografada
    const isMatch = await bcrypt.compare(senha, user.password);
  
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }
  
    // 3. Gera o JWT (token de autenticação)
    const token = jwt.sign(
      { userId: user.id, username: user.name },  // Dados a serem incluídos no token
      'seu-segredo-aqui',  // Chave secreta (em produção, use uma variável de ambiente!)
      { expiresIn: '1h' }  // O token vai expirar em 1 hora
    );
  
    // 4. Envia o token como resposta
    res.status(200).json({ message: 'Login bem-sucedido', token });
  }
module.exports = {login};
