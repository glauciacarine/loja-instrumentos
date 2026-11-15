// Conexão com o MongoDB
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lojainstrumentos';

async function conectar() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado ao MongoDB:', MONGO_URI);
  } catch (erro) {
    console.error('Erro ao conectar ao MongoDB:', erro.message);
    process.exit(1);
  }
}

module.exports = conectar;
