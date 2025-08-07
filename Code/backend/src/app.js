const express = require('express');
const app = express();

app.use(express.json());


module.exports = app;  // Exporta o app para o server.js usar
