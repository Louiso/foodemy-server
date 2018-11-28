const User = require('../models/User.js');
const Curso = require('../models/Curso.js');
const Ciclo = require('../models/Ciclo.js');
const Tema = require('../models/Tema.js');
const Post = require('../models/Post.js');
const Comentario = require('../models/Comentario.js');
const UserCurso = require('../models/Subscripcion.js');

const conceptos = {
  nombre: 'Conceptos',
  temas: [{
    nombre: 'Metabolismo',
    contenido:[{
      tipo: 'TEXT',
      text: 'Este es un texto prueba del tema que aun no se'
    }]
  },{
    nombre: 'Diabetes',
    contenido:[{
      tipo: 'TEXT',
      text: 'Otro Texto'
    }]
  }]
}

const alimentacion = {
  nombre: 'Alimentacion',
  temas: [{
    nombre: 'Alimentos tipo A y tipo B',
    contenido: [{
      tipo: 'TEXT',
      text: 'Se sabe que desde hace mucho tiempo'
    }]
  },{
    nombre: 'Carne Blanca Vs Carne Roja',
    contenido: [{
      tipo: 'TEXT',
      text: 'Baia baia'
    },{
      tipo: 'IMAGE',
      text: 'ciro.png'
    }]
  }]
}

const Basico = {
  nombre: 'Basico',
  cursos: [conceptos, alimentacion]
}

const ciclos = [Basico]

async function main(){

  await Ciclo.deleteMany({})
  await Curso.deleteMany({})
  await Tema.deleteMany({})

  for(let ciclo of ciclos){
    const newCiclo = await Ciclo.create({nombre: ciclo.nombre})
    for(let curso of ciclo.cursos){
      const newCurso = await Curso.create({nombre: curso.nombre})
      for(let tema of curso.temas){
        const newTema = await Tema.create(tema)
        newCurso.temas.push(newTema)
      }
      const cursoDB = await newCurso.save()
      console.log('CursoDB',cursoDB);
      newCiclo.cursos.push(cursoDB)
    }
    const cicloDB = await newCiclo.save()
    console.log('CicloDB',cicloDB);
  }
}

main();
