const ResistenciaInsulina = {
  nombre: 'Resistencia a la Insulina',
  contenido : [{
    tipo: 'TEXT',
    text: 'La insulina es una hormona producida por el páncreas que ayuda a que la glucosa (o azúcar), que proviene de los alimentos, pueda entrar a las células y obtener energía para nuestro cuerpo. En las personas con diabetes tipo 2, existe una combinación de problemas.'
  },{
    tipo: 'TEXT',
    text: 'Los científicos no saben exactamente qué causa esta resistencia a la insulina, se cree que existen distintos defectos en el proceso de entrada de la glucosa a la células mediada por la insulina, que causan la resistencia a la insulina. Medicamentos para el tratamiento de la diabetes tipo 2 se enfocan en diferentes áreas de interacción de la célula y la insulina para promover un mejor control de la glucosa en la sangre. Algunos medicamentos estimulan al páncreas a que produzca más insulina. Otros, ayudan al cuerpo a utilizar mejor la insulina combatiendo la resistencia a la insulina.'
  },{
    tipo: 'IMAGE',
    text: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Resistecia_1.jpg'
  },{
    tipo: 'TEXT',
    text: 'La actividad física también se ha visto que ayuda a que el cuerpo utilice mejor la insulina, disminuyendo la resistencia a la insulina, por eso es muy importante el ejercicio en el tratamiento de la diabetes.'
  }],
  prueba: {
    pregunta: '¿Que es la resistencia a la insulina?',
    opciones: [
      'Es un grupo de celulas que luchan contra el pancreas',
      'No permite el paso de glucosa',
      'No permite la estimulacion con la insulina'
    ],
    indexCorrecta: 2,
    premio: 2
  }
}

module.exports = ResistenciaInsulina;