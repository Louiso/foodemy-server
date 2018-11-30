const Hipoglucemia = {
  nombre: 'Hipoglucemia',
  contenido : [{
    tipo: 'TEXT',
    text: 'Hipoglucemia significa poca glucosa, una forma de azúcar, en la sangre. El cuerpo necesita glucosa para tener suficiente energía. Después de comer, la sangre absorbe la glucosa. Si ingiere más azúcar de la que su cuerpo necesita, los músculos y el hígado almacenan lo que no usa. Cuando el azúcar en la sangre comienza a bajar, una hormona le indica al hígado que libere glucosa.'
  },{
    tipo: 'IMAGE',
    text: 'https://www.wikihow.com/images_en/thumb/5/50/Treat-Reactive-Hypoglycemia-Step-1-Version-2.jpg/v4-728px-Treat-Reactive-Hypoglycemia-Step-1-Version-2.jpg'
  },{
    tipo: 'TEXT',
    text: 'En los diabéticos, la hipoglicemia suele ser un efecto secundario de las medicinas para la diabetes. Comer o beber algo con carbohidratos puede ayudar. Si ocurre con frecuencia, es posible que el médico deba cambiarle su plan de tratamiento.'
  },{
    tipo: 'TEXT',
    text: 'En las personas no diabéticas, las causas de azúcar baja en la sangre incluyen medicamentos o enfermedades, problemas con las hormonas o enzimas y tumores. Los análisis de laboratorio pueden encontrar la causa. El tratamiento depende de lo que esté causando el azúcar bajo.'
  }],
  prueba: {
    pregunta: 'Nombra una de causa de la Hipoglucemia',
    opciones: [
      'Dejar de comer azucar',
      'Consumo de medicamentos contra la diabetes',
      'Comer muchos caramelos'
    ],
    indexCorrecta: 1,
    premio: 2
  }
}

module.exports = Hipoglucemia;