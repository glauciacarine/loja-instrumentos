// Rotas de instrumentos: cadastro (GET/POST) e listagem
const express = require('express');
const Instrumento = require('../models/Instrumento');

const router = express.Router();

// GET /instrumento/add -> exibe o formulário de cadastro
router.get('/add', (req, res) => {
  res.render('instrumento/add');
});

// POST /instrumento/add -> recebe os dados e grava no MongoDB
router.post('/add', async (req, res) => {
  try {
    const { nome, fabricante, preco, tipo } = req.body;

    const instrumento = new Instrumento({
      nome,
      fabricante,
      preco: Number(preco),
      tipo
    });

    await instrumento.save();

    res.render('instrumento/addok', { instrumento });
  } catch (erro) {
    console.error(erro);
    res.status(400).send('Erro ao cadastrar instrumento: ' + erro.message +
      '<br><a href="/instrumento/add">Voltar ao cadastro</a>');
  }
});

// GET /instrumento/lst -> consulta e lista todos os instrumentos
router.get('/lst', async (req, res) => {
  try {
    const instrumentos = await Instrumento.find().sort({ nome: 1 });
    res.render('instrumento/lst', { instrumentos });
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao listar instrumentos: ' + erro.message);
  }
});

module.exports = router;
