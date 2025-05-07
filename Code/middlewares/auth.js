// middlewares/verifyToken.js
const { PrismaClient }= require('../generated/prisma')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
function verifyToken(req, res, next) {
  // Verifica se o token foi enviado no cabeçalho 'Authorization'
  const token = req.headers['authorization']?.split(' ')[1]; // 'Bearer token'

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  // Verifica e valida o token
  jwt.verify(token, 'seu-segredo-aqui', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido ou expirado' });
    }

    // Se o token for válido, armazena as informações decodificadas no objeto 'req'
    req.user = decoded; // Salva os dados do usuário decodificados (ex: userId, username)
    
    next(); // Passa para a próxima função ou rota
  });
}

module.exports = verifyToken;
