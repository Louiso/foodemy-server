const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.get('/mensaje',(req,res)=>{
  res.json({
    mensaje: 'Hola Mundo'
  });
});

app.listen(port , () => {
  console.log(`Escuchando en el puerto ${port}`);
});
