const mongoose = require('mongoose');
const { Schema } = mongoose;

const cursoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  temas: [{
    type: Schema.Types.ObjectId,
    ref: 'Tema'
  }],
  urlImage: String,
  llaves: Number
});

const cursoModel = mongoose.model('Curso',cursoSchema);

module.exports = cursoModel;