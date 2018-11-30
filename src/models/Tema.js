const mongoose = require('mongoose');
const { Schema } = mongoose;

const temaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  contenido: [{
    tipo: {
      type: String,
      enum: ['TEXT', 'IMAGE']
    },
    text: String
  }],
  prueba:{
    pregunta: String,
    opciones: [{
      type: String
    }],
    indexCorrecta: Number,
    premio: {
      type: Number,
      default: 1
    }
  } 
});

const temaModel = mongoose.model('Tema',temaSchema);

module.exports = temaModel;