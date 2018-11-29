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
  temaActual:{
    type: Number,
    default: 0
  },
  pruebas:[{
    type: Schema.Types.ObjectId,
    ref: 'Evaluacion'
  }],
  date : {
    type: Date,
    default: Date.now
  }
});

const subscripcionModel = mongoose.model('Subscripcion',subscripcionSchema);

module.exports = subscripcionModel;