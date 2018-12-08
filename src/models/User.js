const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  seguidores:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  amigos:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  email: {
    type: String,
    required: true,
    unique: true
  },
  urlImage: String,
  llaves: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  cursos: [{
    type: Schema.Types.ObjectId,
    ref: 'Curso',
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  altura: {
    type: Number,
    default: 1.7
  },
  peso: {
    type: Number,
    default: 65
  },
  edad: {
    type: Number,
    default: 18
  },
  sexo: {
    type: String,
    default: 'M'
  }
});

userSchema.methods.toJSON = function(){
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
}

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;