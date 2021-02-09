const { Schema, model } = require('mongoose');

const MensagemSchema = new Schema({
  nome: {
    type: String,
  },
  msg: {
    type: String,
  },
  data: {
    type: Date,
    default: new Date(),
  },
});

const modelo = model('comentarios', MensagemSchema);

module.exports = modelo;
