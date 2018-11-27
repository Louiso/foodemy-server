const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [ true, 'Nombre de usuario es requerido'],
    unique: true
  },
  password: {
    type: String,
    required: [ true, 'Contraseña es requerida'], 
  },
  cursos:[
    {
      name: String,
      cursoActual: Number
    }
  ],
  date: {
    type: Date,
    default: Date.now,
  }
});

const userModel = mongoose.model('User',userSchema);

export default userModel;