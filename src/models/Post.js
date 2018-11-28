const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  descripcion: String,
  urlImage: String,
  comentarios: [{
    _idUser:{
      type: Schema.Types.ObjectId,
      ref: 'User'  
    },
    likes: Number,
    text: String,
    date: {
      type: Date,
      default: Date.now
    }
  }],
  date : {
    type: Date,
    default: Date.now
  }
});

const postModel = mongoose.model('Post',postSchema);

module.exports = postModel;