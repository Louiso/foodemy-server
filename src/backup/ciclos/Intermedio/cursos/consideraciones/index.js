const AdaptacionCuerpo = require('./temas/AdaptacionCuerpo.js');
const Antidepresivos = require('./temas/Antidepresivos.js');
const Intolerancias = require('./temas/Intolerancias.js');

const consideraciones = {
  nombre: 'Consideraciones',
  temas: [
    AdaptacionCuerpo,
    Antidepresivos,
    Intolerancias
  ],
  llaves: 8,
  urlImage: 'http://estaticos.expansion.com/assets/multimedia/imagenes/2015/05/06/14309063299028.jpg'
}

console.log(consideraciones.temas);

module.exports = consideraciones;