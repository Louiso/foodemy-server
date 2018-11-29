const mongoose = require('mongoose');
const { Schema } = mongoose;

const evaluacionSchema = new Schema({
  _idSubscripcion: {
    type: Schema.Types.ObjectId,
    ref: 'Subscripcion'
  },
  _idTema: {
    type: Schema.Types.ObjectId,
    ref: 'Tema'
  },
  respuesta: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const evaluacionModel = mongoose.model('Evaluacion',evaluacionSchema);

module.exports = evaluacionModel;