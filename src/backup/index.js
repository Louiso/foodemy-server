const User = require('../models/User.js');
const Curso = require('../models/Curso.js');
const Ciclo = require('../models/Ciclo.js');
const Tema = require('../models/Tema.js');
const Post = require('../models/Post.js');
const Subscripcion = require('../models/Subscripcion.js');

const bcrypt = require('bcrypt');

const conceptos = {
  nombre: 'Conceptos',
  urlImage: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2017/11/comida_naviden%CC%83a-770x578.jpg',
  llaves: 0,
  temas: [{
    nombre: 'Metabolismo',
    contenido:[{
      tipo: 'TEXT',
      text: 'Este es un texto prueba del tema que aun no se'
    },{
      tipo: 'IMAGE',
      text: 'https://banner2.kisspng.com/20180331/joe/kisspng-lilo-stitch-lilo-pelekai-clip-art-stitch-5abf29b508c845.911580491522477493036.jpg'
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
  urlImage: 'https://www.ecestaticos.com/imagestatic/clipping/78e/458/78e458c5a29ae47ee828218afc325961/por-que-el-desayuno-es-la-comida-mas-importante-si-quieres-estar-delgado.jpg?mtime=1500459950',
  llaves: 1,
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
  await User.deleteMany({})

  const newUser = await User.create({
    username: 'Luis Alfredo',
    email: 'gransullca.25@gmail.com',
    password: bcrypt.hashSync('123',10)
  });

  for(let ciclo of ciclos){
    const newCiclo = await Ciclo.create({nombre: ciclo.nombre})
    for(let curso of ciclo.cursos){
      const newCurso = await Curso.create({nombre: curso.nombre, llaves: curso.llaves, urlImage: curso.urlImage})
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
