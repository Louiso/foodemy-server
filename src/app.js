const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'))

require('./backup/index.js');

app.use('/auth',require('./routes/auth.js'));
app.use('/user',require('./routes/user.js'));
app.use('/curso',require('./routes/curso.js'));
app.use('/api',require('./routes/api.js'));
app.use('/tema',require('./routes/tema.js'));
app.use('/subscripcion',require('./routes/subscripcion.js'));
app.use('/evaluacion',require('./routes/evaluacion.js'));
app.use('/ciclo',require('./routes/ciclo.js'));


module.exports = app;