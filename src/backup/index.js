const User = require('../models/User.js');
const Curso = require('../models/Curso.js');
const Ciclo = require('../models/Ciclo.js');
const Tema = require('../models/Tema.js');
const Post = require('../models/Post.js');
const Subscripcion = require('../models/Subscripcion.js');
const Evaluacion = require('../models/Evaluacion.js');
const mongoose = require('mongoose');
const Intermedio = require('./ciclos/Intermedio/index.js');

const bcrypt = require('bcrypt');

const conceptos = {
    nombre: 'Conceptos',
    urlImage: 'https://blog.seccionamarilla.com.mx/wp-content/uploads/2017/11/comida_naviden%CC%83a-770x578.jpg',
    llaves: 0,
    temas: [{
        nombre: 'Metabolismo',
        contenido: [{
            tipo: 'TEXT',
            text: `Cantidad de gente se queja de tener un "metabolismo lento" pero realmente,¿Que cosa es el metabolismo.\nLas definiciones en el diccionario de la palabra metabolismo pueden ser bastantes tecnicas o complejas. Una definicion basica y facil de entender es : El metabolismo es la suma de todos los movimiento, acciones y cambios que ocurren en el cuerpo para convertir los alimentos y los nutrientes en enegia para sobrevivir.\nSon muchos los procesos, movimiento, acciones y cambios que el cuerpo humano realiza para poder sobrevivir: digestion, absorcion, respiracion, sistema inmune (defensa), circulacion,eliminacion, etc. Cada uno de estos procesos tiene algo en comun: MOVIMIENTO. El movimiento siempre conlleva el uso de energia. Sin energia  no hay movimiento. Aunque no podamos a siempre vista ver los atomos que componen la materia al moverse en sus constantes orbitas sigue siendo cierto que toda la materia esta compuesta de atomos que estan en movimiento.\n El cuerpo humano esta compuesto de materia. Son componetes como agua, grasa, proteinas, carbohidratos y minerales. Todos estas materia estan animadas por la vida ,que hay en nosotros pero a su vez responden a las leyes de la fisica y los atomos. Los organismos vivos, para sobrevivir, deben poder tener movimientos. Pero el movimeinto debera ser un movimiento ordenado y a un ritmo adecuado.Ejemplo: si nuestro corazon va un ritmo demasiado lento seria un riesgo casi igual de severo que si va un ritmo demasiado rapido. Para sobrevivir, el cuerpo humano necesita tener movimeinto pero este movimiento debera ser un ritmo adecuado, ni muy lento ni muy rapido. El metabilimos es la suma total de todos los movimientos que el cuerpo ejecuta para poder existir como cuerpo.`
        }, {
            tipo: 'IMAGE',
            text: 'https://raw.githubusercontent.com/Louiso/foodemy/master/assets/imagenes/Metabolismo/What-is-metabolism.png'
        }],
        prueba: {
            pregunta: '¿Que es el metabolismo?',
            opciones: [
                'Suma de todos los movimiento, acciones y cambios que ocurren en el cuerpo para convertir los alimentos y los nutrientes en enegia para sobrevivir',
                'La razon por la que como poco y engordo mucho',
                'Suma de todos los movimiento, acciones y cambios que ocurren en el cuerpo'
            ],
            indexCorrecta: 1,
            premio: 2,
        }
    }, {
        nombre: 'Colesterol',
        contenido: [{
            tipo: 'TEXT',
            text: `¿Qué es el colesterol?\n\nEl colesterol es una sustancia cerosa y parecida a la grasa que se encuentra en todas las células de su cuerpo. Su cuerpo necesita algo de colesterol para producir hormonas, vitamina D y sustancias que le ayuden a digerir los alimentos. Su cuerpo produce todo el colesterol que necesita. El colesterol también se encuentra en alimentos de origen animal, como yemas de huevo, carne y queso.\n Si tiene demasiado colesterol en la sangre, puede combinarse con otras sustancias en la sangre para formar placa. La placa se pega a las paredes de sus vasos sanguíneos. Esta acumulación se llama arterioesclerosis. Puede provocar enfermedad de las arterias coronarias, la que puede estrecharlas o incluso bloquearlas.\nTipos de colesterol:\nHDL significa lipoproteínas de alta densidad en inglés. Se le llama colesterol "bueno" porque transporta el colesterol de otras partes de su cuerpo a su hígado. Su hígado luego elimina el colesterol de su cuerpo\nLDL significa lipoproteínas de baja densidad en inglés. Se llama colesterol "malo" porque un nivel alto de LDL lleva a una acumulación de colesterol en las arterias.\nLipoproteína de muy baja densidad: También es un colesterol "malo" porque también contribuye a la acumulación de placa en las arterias. Pero la lipoproteína de muy baja densidad y el LDL son diferentes; la lipoproteína de muy baja densidad transporta triglicéridos y el LDL lleva colesterol \n¿Qué causa el colesterol alto?\nLa causa más común del colesterol alto es un estilo de vida poco saludable. Esto puede incluir: Hábitos alimenticios poco saludables,falta de actividad física, fumar, lo que reduce el colesterol bueno (HDL), especialmente en las mujeres. También aumenta su colesterol malo (LDL)`
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que es el Colesterol?',
            opciones: [
                'Sustancia cerosa y parecida a la grasa que se encuentra en todas las células de su cuerpo',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1,
            premio: 2
        }
    }, {
        nombre: 'Digestion',
        contenido: [{
            tipo: 'TEXT',
            text: 'La digestión es el proceso de transformación de los alimentos, previamente ingeridos, en sustancias más sencillas para ser absorbidos. La digestión ocurre tanto en los organismos pluricelulares como en las células. En este proceso participan diferentes tipos de enzimas \n El sistema o aparato digestivo1​ es muy importante en la digestión ya que los organismos heterótrofos dependen de fuentes externas de materias primas y energía para crecimiento, mantenimiento y funcionamiento. El alimento se emplea para generar y reparar tejidos y obtención de energía. Los organismos autótrofos (las plantas, organismos fotosintéticos), por el contrario, captan la energía lumínica y la transforman en energía química, utilizable por los animales.'
        }, {
            tipo: 'IMAGE',
            text: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5iUm-KnEXzWLU_TA4dfeaabjSZySBjI_TDfV1u2UxgTtGMtN'
        }],
        prueba: {
            pregunta: '¿Que es la Digestion?',
            opciones: [
                'Proceso de transformación de los alimentos, previamente ingeridos, en sustancias más sencillas para ser absorbidos',
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Generacion de grasa en el cuerpo',
        contenido: [{
            tipo: 'TEXT',
            text: 'Una vez se forman las células de grasa, estas pueden encogerse durante la pérdida de peso, pero no desaparecen, un hecho que ayuda a explicar por qué se recuperan con tanta rapidez los kilos de más al poco tiempo de dejar de seguir el régimen o la dieta equilibrada. Pero además, como han comprobado los autores de una investigación reciente, al principio del proceso esas células de grasa son creadas con notable rapidez. En el estudio se ha profundizado en cómo y cuán deprisa ocurre esto. \nEl equipo de Matthew Rodeheffer, profesor en la Universidad Yale en New Haven, Connecticut, Estados Unidos, ha constatado que la producción de células de grasa se inicia en el plazo de un día después de comenzarse una dieta alta en grasas. Rodeheffer y sus colaboradores también han comprobado con ratones jóvenes alimentados con una dieta inductora de obesidad que esa producción relámpago de células de grasa no ocurre si los animales carecen de una vía bioquímica clave que interviene en la detección de los nutrientes que entran en el cuerpo\nLa ganancia de peso se produce debido a la creación y expansión de las células de grasa blanca, o tejido adiposo. Seguir una dieta adecuada puede encoger las células de grasa pero no eliminarlas, razón por la cual las personas que han estado gordas recuperan peso tan rápidamente cuando descuidan su régimen. El equipo de Tale encontró en sus experimentos que era necesaria la activación de una vía de señalización de nutrientes denominada PI3-quinasa/AKT-2 para producir las células de grasa precursoras, que a su vez producen el tejido adiposo. Los ratones normales empezaron a producir estas células precursoras a las 24 horas de comenzar una dieta rica en grasas.'
        }, {
            tipo: 'IMAGE',
            text: 'https://noticiasdelaciencia.com/upload/img/periodico/img_26548.jpg'
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
        nombre: 'Insulina',
        contenido: [{
            tipo: 'TEXT',
            text: 'La insulina es una hormona producida por el páncreas, que contribuye a regular los niveles de glucosa en sangre. Esta hormona es vital para el transporte y almacenamiento de la glucosa en las células, ayuda a utilizar la glucosa como fuente de energía para el organismo.\nLa insulina actúa como una llave para permitir que la glucosa acceda a las células. Si la glucosa no puede entrar en las células, se acumula en la sangre.'
        }, {
            tipo: 'IMAGE',
            text: 'http://diabetesaxarquia.es/wp-content/uploads/2018/05/insulina2.png'
        }],
        prueba: {
            pregunta: '¿Que es la Insulina?',
            opciones: [
                'Es un hecho establecido hace demasiado tiempo que un lector',
                'hormona producida por el páncreas, que contribuye a regular los niveles de glucosa en sangre',
                'Es un hecho establecido hace demasidao tiempo que un lector 3'
            ],
            indexCorrecta: 1
        }
    }, {
        nombre: 'Macromoleculas',
        contenido: [{
            tipo: 'TEXT',
            text: 'Una macromolécula es una molécula de gran tamaño creada comúnmente a través de la polimerización de subunidades más pequeñas (monómeros). Por lo general, se componen de miles, o más, de átomos. Pueden ser tanto orgánicas como inorgánicas y las más comunes en bioquímica son biopolímeros (ácidos nucleicos, proteínas, carbohidratos y polifenoles) y grandes moléculas no poliméricas (como lípidos y macrociclos).'
        }, {
            tipo: 'IMAGE',
            text: 'https://image.slidesharecdn.com/unidaditema2biologia-110203151403-phpapp02/95/unidad-i-tema-2-biologia-17-728.jpg?cb=1296746105'
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
    cursos: [conceptos, alimentacion, consideraciones, noIntencionado]
}

const ciclos = [Basico, Intermedio]

async function main() {

    await Ciclo.deleteMany({})
    await Curso.deleteMany({})
    await Tema.deleteMany({})
    await User.deleteMany({})
    await Subscripcion.deleteMany({});
    await Evaluacion.deleteMany({});
    await Post.deleteMany({});

    const newUser = await User.create({
        _id: '5c0844b017fc14670cf689e7',
        username: 'Luis Alfredo',
        email: 'A@a',
        password: bcrypt.hashSync('123', 10)
    });
    // console.log(newUser);
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
    const cursoConceptos = await Curso.findOne({
        nombre: 'Conceptos'
    })
    await Subscripcion.create({
        _idUser: newUser._id,
        _idCurso: cursoConceptos._id
    })
}

(async ()=>{
    await main();
    console.log('LISTO');
})()