const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscripcionSchema = new Schema({
  _idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _idCurso: {
    type: Schema.Types.ObjectId,
    ref: 'Curso'
  },
  temaActual: Number,
  pruebas:[{
    type: Schema.Types.ObjectId,
    ref: 'Evaluacion'
  }]
});

const subscripcionModel = mongoose.model('Subscripcion',subscripcionSchema);

module.exports = subscripcionModel;