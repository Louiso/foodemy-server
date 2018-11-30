const conceptos2 = require('./cursos/conceptos2/index.js');
const consideraciones = require('./cursos/consideraciones/index.js');
const trucosAlimentos = require('./cursos/trucosAlimentos/index.js');
const Intermedio = {
  nombre: 'Intermedio',
  cursos: [conceptos2,consideraciones, trucosAlimentos ]
}
module.exports = Intermedio;