const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'))


app.use('/auth',require('./routes/auth.js'));
app.use('/user',require('./routes/user.js'));
app.use('/api',require('./routes/api.js'));

module.exports = app;