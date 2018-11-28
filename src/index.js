require('./config/config.js');
const app = require('./app.js');
const mongoose = require('mongoose');


mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Base de datos conectada');
  app.listen(process.env.PORT , () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
  });
});

