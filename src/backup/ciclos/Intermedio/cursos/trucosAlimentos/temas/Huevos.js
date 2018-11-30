const Huevos = {
  nombre: 'Los Huevos',
  contenido : [{
    tipo: 'TEXT',
    text: 'Los huevos de las aves constituyen un alimento habitual en la alimentación de los humanos. Se presentan protegidos por una cáscara y son ricos en proteínas (principalmente albúmina, que es la clara o parte blanca del huevo) y lípidos.1​2​ Son un alimento de fácil digestión, componente principal de múltiples platos dulces y salados, y una parte imprescindible en muchos otros debido a sus propiedades aglutinantes.'
  },{
    tipo: 'IMAGE',
    text: 'https://s3.eestatic.com/2018/05/09/ciencia/salud/Salud_305983124_76989220_1024x576.jpg'
  }],
  prueba: {
    pregunta: '¿Es bueno comer huevos todos los dias?',
    opciones: [
      'Si',
      'No'
    ],
    indexCorrecta: 0,
    premio: 2
  }
}

module.exports = Huevos;