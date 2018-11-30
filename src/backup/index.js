const User = require('../models/User.js');
const Curso = require('../models/Curso.js');
const Ciclo = require('../models/Ciclo.js');
const Tema = require('../models/Tema.js');
const Post = require('../models/Post.js');
const Subscripcion = require('../models/Subscripcion.js');
const Evaluacion = require('../models/Evaluacion.js');

const bcrypt = require('bcrypt');

const conceptos = {
    nombre: 'Conceptos',
    urlImage: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2017/11/comida_naviden%CC%83a-770x578.jpg',
    llaves: 0,
    temas: [{
        nombre: 'Metabolismo',
        contenido: [{
            tipo: 'TEXT',
            text: 'Este es un texto prueba del tema que aun no se'
        }, {
            tipo: 'IMAGE',
            text: 'https://banner2.kisspng.com/20180331/joe/kisspng-lilo-stitch-lilo-pelekai-clip-art-stitch-5abf29b508c845.911580491522477493036.jpg'
        }],
        prueba: {
            pregunta: '¿Que es el metabolismo?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Colesterol',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que es el Colesterol?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Digestion',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5iUm-KnEXzWLU_TA4dfeaabjSZySBjI_TDfV1u2UxgTtGMtN'
        }],
        prueba: {
            pregunta: '¿Que es la Digestion?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Generacion de grasa',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que es la generacion de grasa?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Hongo Candida',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que es el Hongo Candida?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Insulinda',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que es la Insulina?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Macromoleculas',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que son las Macromoleculas?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
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
        }],
        prueba: {
            pregunta: '¿Que son los alimentos tipo A y B?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Carne Blanca Vs Carne Roja',
        contenido: [{
            tipo: 'TEXT',
            text: 'Baia baia'
        }, {
            tipo: 'IMAGE',
            text: 'ciro.png'
        }],
        prueba: {
            pregunta: '¿Que aporta la Carne Blanca y La Carne Negra?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Comida Rapida',
        contenido: [{
            tipo: 'TEXT',
            text: 'Baia baia'
        }, {
            tipo: 'IMAGE',
            text: 'ciro.png'
        }],
        prueba: {
            pregunta: '¿Que hace la comida rapida en tu cuerpo?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Comidas - Tiempo de Digestion',
        contenido: [{
            tipo: 'TEXT',
            text: 'Baia baia'
        }, {
            tipo: 'IMAGE',
            text: 'ciro.png'
        }],
        prueba: {
            pregunta: '¿Que tiempos de digestion son correctos?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Dieta 2x1 y 3x1',
        contenido: [{
            tipo: 'TEXT',
            text: 'Baia baia'
        }, {
            tipo: 'IMAGE',
            text: 'ciro.png'
        }],
        prueba: {
            pregunta: '¿Que es la dieta 2x1 y 3x1?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }]
}

const consideraciones = {
    nombre: 'Consideraciones',
    urlImage: 'http://behdasht.news/images/news/62583/thumbs/62583.jpg',
    llaves: 0,
    temas: [{
        nombre: 'Estres',
        contenido: [{
            tipo: 'TEXT',
            text: 'Este es un texto prueba del tema que aun no se'
        }, {
            tipo: 'IMAGE',
            text: 'https://banner2.kisspng.com/20180331/joe/kisspng-lilo-stitch-lilo-pelekai-clip-art-stitch-5abf29b508c845.911580491522477493036.jpg'
        }],
        prueba: {
            pregunta: '¿Que impacto tienes el estres?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Consecuencias de la grasa corporal ',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Cuales son las consecuencias de la grasa corporal?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Las mujeres adelgazan menos',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5iUm-KnEXzWLU_TA4dfeaabjSZySBjI_TDfV1u2UxgTtGMtN'
        }],
        prueba: {
            pregunta: '¿Por que las mujeres adelgazan menos?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Vida Sedentaria',
        contenido: [{
            tipo: 'TEXT',
            text: 'Contenido'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Consecuencias de la vida sedentaria?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }]
}

const noIntencionado = {
    nombre: 'Cosas que pensabas que eran buenas',
    urlImage: 'http://behdasht.news/images/news/62583/thumbs/62583.jpg',
    llaves: 0,
    temas: [{
            nombre: 'Atrofia Muscular',
            contenido: [{
                tipo: 'TEXT',
                text: 'Este es un texto prueba del tema que aun no se'
            }, {
                tipo: 'IMAGE',
                text: 'https://banner2.kisspng.com/20180331/joe/kisspng-lilo-stitch-lilo-pelekai-clip-art-stitch-5abf29b508c845.911580491522477493036.jpg'
            }],
            prueba: {
                pregunta: '¿Que es la atrofia muscular?',
                opciones: [
                    'Es un hecho establecido hace demasiado tiempo que un lector',
                    'Es un hecho establecido hace demasiado tiempo que un lector 2',
                    'Es un hecho establecido hace demasidao tiempo que un lector 3'
                ],
                indexCorrecta: 1
            }
        }, {
            nombre: 'Desayuno Deficiente',
            contenido: [{
                tipo: 'TEXT',
                text: 'Contenido'
            }, {
                tipo: 'IMAGE',
                text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
            }],
            prueba: {
                pregunta: '¿Cuales son las consecuencias del desayuno deficiente?',
                opciones: [
                    'Es un hecho establecido hace demasiado tiempo que un lector',
                    'Es un hecho establecido hace demasiado tiempo que un lector 2',
                    'Es un hecho establecido hace demasidao tiempo que un lector 3'
                ],
                indexCorrecta: 1
            }
        }, {
            nombre: 'Las dietas y por que no funcionan',
            contenido: [{
                tipo: 'TEXT',
                text: 'Contenido'
            }, {
                tipo: 'IMAGE',
                text: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5iUm-KnEXzWLU_TA4dfeaabjSZySBjI_TDfV1u2UxgTtGMtN'
            }],
            prueba: {
                pregunta: '¿Por que las dietan no funcionan?',
                opciones: [
                    'Es un hecho establecido hace demasiado tiempo que un lector',
                    'Es un hecho establecido hace demasiado tiempo que un lector 2',
                    'Es un hecho establecido hace demasidao tiempo que un lector 3'
                ],
                indexCorrecta: 1
            }
        }, {
            nombre: 'Frutas que hacen daño ',
            contenido: [{
                tipo: 'TEXT',
                text: 'Contenido'
            }, {
                tipo: 'IMAGE',
                text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
            }],
            prueba: {
                pregunta: '¿Que frutas hacen daño?',
                opciones: [
                    'Es un hecho establecido hace demasiado tiempo que un lector',
                    'Es un hecho establecido hace demasiado tiempo que un lector 2',
                    'Es un hecho establecido hace demasidao tiempo que un lector 3'
                ],
                indexCorrecta: 1
            }
        },
        {
            nombre: 'Vitaminas o Vitapobres',
            contenido: [{
                tipo: 'TEXT',
                text: 'Explicacion de xq las vitaminas no son tan indispensables'
            }, {
                tipo: 'IMAGE',
                text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
            }],
            prueba: {
                pregunta: '¿Que son las Vitaminas y Vitapobres?',
                opciones: [
                    'Es un hecho establecido hace demasiado tiempo que un lector',
                    'Es un hecho establecido hace demasiado tiempo que un lector 2',
                    'Es un hecho establecido hace demasidao tiempo que un lector 3'
                ],
                indexCorrecta: 1
            }
        }
    ]
}


const Basico = {
    nombre: 'Basico',
    cursos: [conceptos, alimentacion, ]
}

const ciclos = [Basico]

async function main() {

    await Ciclo.deleteMany({})
    await Curso.deleteMany({})
    await Tema.deleteMany({})
    await User.deleteMany({})
    await Subscripcion.deleteMany({});
    await Evaluacion.deleteMany({});
    await Post.deleteMany({});

    const newUser = await User.create({
        username: 'Luis Alfredo',
        email: 'gransullca.25@gmail.com',
        password: bcrypt.hashSync('123', 10)
    });

    for (let ciclo of ciclos) {
        const newCiclo = await Ciclo.create({ nombre: ciclo.nombre })
        for (let curso of ciclo.cursos) {
            const newCurso = await Curso.create({ nombre: curso.nombre, llaves: curso.llaves, urlImage: curso.urlImage })
            for (let tema of curso.temas) {
                const newTema = await Tema.create(tema)
                newCurso.temas.push(newTema)
            }
            const cursoDB = await newCurso.save()
                // console.log('CursoDB',cursoDB);
            newCiclo.cursos.push(cursoDB)
        }
        const cicloDB = await newCiclo.save()
            // console.log('CicloDB',cicloDB);
    }
}

main();