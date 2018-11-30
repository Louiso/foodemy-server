const HongoCandida = {
  nombre: 'Hongo Candida',
  contenido : [{
    tipo: 'TEXT',
    text: 'Cándida es el nombre científico de una levadura. Es un hongo que vive en casi todas partes, incluso dentro de su cuerpo. Por lo general, el sistema inmunitario mantiene los hongos bajo control. Si está enfermo o toma antibióticos, pueden multiplicarse y causar una infección.'
  },{
    tipo: 'TEXT',
    text: 'Los antimicóticos pueden eliminar las infecciones por cándida en la mayoría de las personas. Si tiene un sistema inmunitario debilitado, el tratamiento puede ser más difícil.'
  },{
    tipo: 'IMAGE',
    text: 'https://mejorconsalud.com/wp-content/uploads/2018/04/sintomas-hongos-boca.jpg'
  }],
  prueba: {
    pregunta: '¿Donde encontramos el Hongo Candida?',
    opciones: [
      'Solo en la boca',
      'Solo en la oreja',
      'En cualquier parte del cuerpo'
    ],
    indexCorrecta: 2,
    premio: 2
  }
}

module.exports = HongoCandida;