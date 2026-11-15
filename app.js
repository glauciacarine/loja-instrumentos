// Aplicação principal
const express = require('express');
const path = require('path');
const conectar = require('./db');
const instrumentoRoutes = require('./routes/instrumento');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true })); // lê os dados do formulário
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => res.redirect('/instrumento/lst'));
app.use('/instrumento', instrumentoRoutes);

// Inicia o servidor após conectar ao MongoDB
conectar().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
