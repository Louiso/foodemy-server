const Hipotiroidismo = {
  nombre: 'Hipotiroidismo',
  contenido : [{
    tipo: 'TEXT',
    text: 'La tiroides es una glándula con forma de mariposa que está en el cuello, ubicada encima de la clavícula. Es una de las glándulas endocrinas que producen hormonas. Las hormonas tiroideas controlan el ritmo de muchas actividades en su cuerpo. Estas incluyen la rapidez con que usted quema calorías y la rapidez con que su corazón late. Todas estas actividades son parte del metabolismo de su cuerpo. Si su glándula tiroides no es lo suficientemente activa, no produce la cantidad de hormona tiroidea para satisfacer las necesidades de su cuerpo. Esta condición es el hipotiroidismo.'
  },{
    tipo: 'IMAGE',
    text: 'https://static0.misionesonline.net/wp-content/uploads/2018/04/hipotiroidismo-7bluualmdh90.jpg'
  },{
    tipo: 'TEXT',
    text: 'El hipotiroidismo es más común en las mujeres, en las personas con otros problemas de la tiroides y en las personas mayores de 60 años de edad. La enfermedad de Hashimoto, un trastorno autoinmune, es la causa más común. Otras causas son los nódulos tiroideos, tiroiditis, el hipotiroidismo congénito, la extirpación quirúrgica de una parte o la totalidad de la tiroides, el tratamiento de radiación de la tiroides y algunos medicamentos.'
  }],
  prueba: {
    pregunta: '¿Que funcion tiene la tiroides?',
    opciones: [
      'Genera hormonas que controlan el ritmo de las actividades del cuerpo',
      'Genera la insulina',
      'Genera enzimas que usamos en la digestion'
    ],
    indexCorrecta: 0,
    premio: 2
  }
}

module.exports = Hipotiroidismo;