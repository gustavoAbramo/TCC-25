const express = require('express'); //instancia o express
const path = require('path'); //biblioteca para a escrever o caminho 
const app = express();  //chama o express para criar o servidor
const PORT = 3000; //escolhe a porta
const cors = require('cors'); // importando o cors para permitir que o frontend acesse o backend
const pages = require ("./routes/pages");
const usuario_cadastro = require ("./routes/rotasCadastro")
const user_login = require ("./routes/rotasLogin")
app.use(express.static('public')); //permite que o programa acesse os estilos e imagens do public


// Definir a engine EJS
app.set('view engine', 'ejs');

// Definir o diretório das views
app.set('views', path.join(__dirname, 'views'));

// Middleware para interpretar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pages);

app.use("/user", usuario_cadastro)

app.use("/user",  user_login)

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
