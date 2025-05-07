//vou fazer a funçao para registrar aqui
// controllers/authController.js
//import prisma from '../prismaClient.js'
const { PrismaClient }= require('../generated/prisma')

const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

async function criar_user(req, res) {
  const { name, senha, email} = req.body

  const password = await bcrypt.hash(senha, 10)

  const user = await prisma.user.create({
    data: {
      name, 
      password,
      email: email
    }
  })

  res.status(201).send(user)
}

function hello(req, res) {
 return ("hello");
}

module.exports = {criar_user , hello};
