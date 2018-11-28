const mongoose = require('mongoose');
const { Schema } = mongoose;

const cicloSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  cursos: [{
    type: Schema.Types.ObjectId,
    ref: 'Curso'
  }]
});

const cicloModel = mongoose.model('Ciclo',cicloSchema);

module.exports = cicloModel;