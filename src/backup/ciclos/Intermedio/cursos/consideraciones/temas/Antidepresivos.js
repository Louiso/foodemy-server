const Antidepresivos = {
  nombre: 'Antidepresivos',
  contenido : [{
    tipo: 'TEXT',
    text: 'Los antidepresivos son medicinas que receta un médico para tratar la depresión. Estos medicamentos ayudan a mejorar la forma en que el cerebro utiliza ciertas sustancias químicas naturales. Pueden tardar varias semanas en hacer efecto. Existen muchos tipos de antidepresivos. A veces, es necesario probar más de uno hasta encontrar el que surta un mejor efecto.'
  },{
    tipo: 'TEXT',
    text: 'Estos medicamentos pueden causar algunos efectos secundarios menores que, en general, no duran mucho tiempo. Por ejemplo: dolor de cabeza, náuseas, problemas para dormir, inquietud y problemas sexuales. Infórmele al médico si tiene cualquier efecto secundario. También debe informarle al médico si toma otras medicinas, vitaminas o suplementos herbarios.'
  },{
    tipo: 'IMAGE',
    text: 'https://www.fitnessrevolucionario.com/wp-content/uploads/2015/10/depresion.jpg'
  },{
    tipo: 'TEXT',
    text: 'Es importante que continúe tomando las medicinas, aunque se sienta mejor y no deje de tomarlas sin hablar con el médico. Generalmente, los antidepresivos deben interrumpirse gradualmente.'
  }],
  prueba: {
    pregunta: 'Menciona algun efecto secundario',
    opciones: [
      'Cansancio, mareos, vomitos, dolores musculares y secresion nasal',
      'Dolor de cabeza, nauseas, problemas para dormir, inquietud y problemas sexuales',
      'Diarrea, Escalosfrios, fiebre, mareos'
    ],
    indexCorrecta: 1,
    premio: 2
  }
}

module.exports = Antidepresivos;