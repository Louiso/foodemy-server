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
  llaves: Number,
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
  }]
});

userSchema.methods.toJSON = function(){
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
}

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;