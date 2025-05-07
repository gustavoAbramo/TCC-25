const { PrismaClient }= require('../generated/prisma')

const prisma = new PrismaClient()

const express = require('express');
const router = express.Router();  // Certifique-se de importar o 'Router'

// Rota para renderizar a página de cadastro (ou outra página)
router.get('/', async(req, res) => {
    // const response = await fetch("http://localhost:3000/registerData"); // Solicita uma previda dos dados informados na rota registerData
    // const data = await response.json() // Converte as informações para json
    // console.log(data)  // Console.log é feito no terminal rodando o servidor
    // console.log(response.status)
    res.render('pages/home'); // Renderiza a view "register.ejs" dentro da pasta "pages"
});

router.get('/login', (req, res) => {
    res.render('pages/login'); // Renderiza a view "register.ejs" dentro da pasta "pages"
});

router.get('/register', (req, res) => {
    res.render('pages/register'); // Renderiza a view "register.ejs" dentro da pasta "pages"
    
});

router.get('/registerData', async(req, res) => {
    let data = await prisma.user.findMany()
    console.log(data)
    res.send(data).status(200)
});

module.exports = router;
