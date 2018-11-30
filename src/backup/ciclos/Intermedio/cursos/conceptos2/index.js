const Diabetes = require('./temas/Diabetes.js');
const GlucosaAtp = require('./temas/GlucosaAtp.js');
const Hipoglucemia = require('./temas/Hipoglucemia.js');
const Hipotiroidismo = require('./temas/Hipotiroidismo.js');
const ResistenciaInsulina = require('./temas/ResistenciaInsulina.js');

const conceptos2 = {
  nombre: 'Conceptos II',
  temas: [
    Diabetes,
    GlucosaAtp,
    Hipoglucemia,
    Hipotiroidismo,
    ResistenciaInsulina
  ],
  llaves: 5,
  urlImage: 'http://cdn2.ticbeat.com/src/uploads/2016/08/conceptos-fundamentales-google-analytics-810x516.jpg?x32709'
}

console.log(conceptos2.temas);

module.exports = conceptos2;