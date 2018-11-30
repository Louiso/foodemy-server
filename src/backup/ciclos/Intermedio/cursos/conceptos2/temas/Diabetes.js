const Diabetes = {
  nombre: 'Diabetes',
  contenido : [{
    tipo: 'TEXT',
    text : 'Es una enfermedad prolongada (crónica) en la cual el cuerpo no puede regular la cantidad de azúcar en la sangre.'
  },{
    tipo: 'TEXT',
    text: 'La insulina es una hormona producida por el páncreas para controlar el azúcar en la sangre. La diabetes puede ser causada por muy poca producción de insulina, resistencia a la insulina o ambas.'
  },{
    tipo: 'TEXT',
    text: 'Para comprender la diabetes, es importante entender primero el proceso normal por medio del cual el alimento se transforma y es empleado por el cuerpo para obtener energía. Suceden varias cosas cuando se digiere y absorbe el alimento.'
  },{
    tipo: 'TEXT',
    text: 'Un azúcar llamado glucosa entra en el torrente sanguíneo. La glucosa es una fuente de energía para el cuerpo.',
  },{
    tipo: 'TEXT',
    text: 'Un órgano llamado páncreas produce la insulina. El papel de la insulina es transportar la glucosa del torrente sanguíneo hasta el músculo, la grasa y otras células, donde puede almacenarse o utilizarse como fuente de energía.'
  },{
    tipo: 'IMAGE',
    text: 'https://medlineplus.gov/spanish/ency/images/ency/fullsize/8812.jpg'
  },{
    tipo: 'TEXT',
    text: 'La idea conceptual de la insulina es que son hormonas que estimulan la asimilacion del azucar por parte de las celulas. Los problemas a la salud se dan cuando esta estimulacion se da demasiado frecuente.'
  }],
  prueba: {
    pregunta: '¿Que es la insulina?',
    opciones: [
      'Es una hormona que regula el azucar en la sangre',
      'Es medicina de sabor muy amargo',
      'Es el acido que se encuentra dentro del estomago'
    ],
    indexCorrecta: 0,
    premio: 2
  }
}

module.exports = Diabetes;