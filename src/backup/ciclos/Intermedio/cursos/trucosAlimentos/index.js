const FrutasInfaltables = require('./temas/FrutasInfaltables.js');
const Huevos = require('./temas/Huevos.js');
const Pitahaya = require('./temas/Pitahaya.js');

const trucosAlimentos = {
  nombre: 'Trucos',
  temas: [
    FrutasInfaltables,
    Huevos,
    Pitahaya
  ],
  llaves: 10,
  urlImage: 'https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=512ebba013149073596fc108891a13bf&auto=format&fit=crop&w=782&q=80'
}

console.log(trucosAlimentos.temas);

module.exports = trucosAlimentos;