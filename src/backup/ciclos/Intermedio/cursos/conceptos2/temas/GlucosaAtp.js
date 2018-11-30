const GlucosaAtp = {
  nombre: 'Glucosa y Atp',
  contenido : [{
    tipo: 'TEXT',
    text: 'La glucosa en simples palabras es un tipo de azucar que se encuentra en las frutas y en la miel.'
  },{
    tipo: 'TEXT',
    text: 'La importancia de esta biomolecula es que en el proceso de la respiracion cuya eficiencia es del 40% en la produccion de energia, esta es guardada en forma de ATP.'
  },{
    tipo: 'IMAGE',
    text: 'https://www.redcenit.com/redcenit/wp-content/uploads/2017/11/respiraci%C3%B3n.jpg'
  },{
    tipo: 'TEXT',
    text: 'Las moleculas de ATP, son las verdaderas responsables de guardar la energia en nuestro cuerpo.'
  }],
  prueba: {
    pregunta: '¿Que es el ATP?',
    opciones: [
      'Es una banda de rock',
      'Es un virus',
      'Es la responsable de guardar la energia generada por el metabolismo'
    ],
    indexCorrecta: 2,
    premio: 2
  }
}

module.exports = GlucosaAtp;