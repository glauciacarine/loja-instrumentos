// Model Instrumento
const mongoose = require('mongoose');

const instrumentoSchema = new mongoose.Schema({
  nome:       { type: String, required: true, trim: true },
  fabricante: { type: String, required: true, trim: true },
  preco:      { type: Number, required: true, min: 0 },
  tipo:       { type: String, required: true, trim: true }
});

module.exports = mongoose.model('Instrumento', instrumentoSchema);
