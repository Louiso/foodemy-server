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
                'Grasa que se encuentra en la sangre',
                'Sustancia maligna que se encuentra en las comidas con muchas grasas'
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
                'Es un hecho establecido hace demasiado tiempo que un lector 2',
                'Es un hecho establecido hace demasidao tiempo que un lector 3',
                'Proceso de transformación de los alimentos, previamente ingeridos, en sustancias más sencillas para ser absorbidos'
            ],
            indexCorrecta: 3,
            premio: 1

        }
    }, {
        nombre: 'Generacion de grasa en el cuerpo',
        contenido: [{
            tipo: 'TEXT',
            text: 'La grasa es una forma eficiente que tiene el organismo de guardar energía. Lo hace en células llamadas adipocitos, cuya acumulación forma el tejido adiposo. Como todos sabemos, un exceso de este tejido nos va a traer problemas de salud, sobre todo con las llamadas enfermedades metabólicas. Cuando nuestro organismo decide almacenar grasa, tiene varias formas y varios sitios donde hacerlo, veamos dónde y cómo almacena la grasa nuestro cuerpo.\n Grasa subcutánea: son los conocidos “michelines”. Es la grasa que se va a acumular debajo de nuestra piel y la que normalmente perdemos con más facilidad cuando hacemos ejercicio.\n Grasa visceral: esta grasa ya está más interiorizada en nuestro organismo. Se localiza alrededor de los órganos, algo que va a suponer un peligro si está en exceso.\n Grasa intramuscular: es muy poca la grasa que se va a depositar entre las fibras musculares. Normalmente no se suele hablar de esta localización de grasa porque su cantidad es muy inferior en comparación con las otras dos.\n Si nuestros niveles de grasa son considerados dentro de la normalidad, habrá un equilibrio en la distribución de grasa. En el momento en que los niveles de grasa aumentan, serán nuestra genética y estado hormonal los que decidan dónde almacenar esa grasa. La testosterona del hombre suele hacer que se almacene en barriga y torso y los estrógenos de la mujer en caderas y muslos, de ahí la famosa forma de manzana y pera en hombre y mujer respectivamente.\n El problema es que al sobrecargar los almacenes de grasa, se entorpecen muchos procesos metabólicos, comenzando a aumentar el riesgo de sufrir diabetes, dislipemias o hipertensión. No hay nada como el ejercicio y la buena alimentación para mantener nuestro reparto graso a raya.'
        }, {
            tipo: 'IMAGE',
            text: 'https://noticiasdelaciencia.com/upload/img/periodico/img_26548.jpg'
        }],
        prueba: {
            pregunta: '¿Que es la grasa',
            opciones: [
                'La grasa es una forma eficiente que tiene el organismo de guardar energía',
                'Una sustancia aceitosa y viscosa que daña mi cuerpo',
                'Lo que deseo elimninar y no se como hacerlo'
            ],
            indexCorrecta: 1,
            premio: 1
        }
    }, {
        nombre: 'Hongo Candida',
        contenido: [{
            tipo: 'TEXT',
            text: 'Cándida es el nombre científico de una levadura. Es un hongo que vive en casi todas partes, incluso dentro de su cuerpo. Por lo general, el sistema inmunitario mantiene los hongos bajo control. Si está enfermo o toma antibióticos, pueden multiplicarse y causar una infección.\n El hongo candida albicans no permite que una persona pueda bajar de peso eficientemente. La razón para esto es que este hongo, cuando ha crecido de forma desmedida en el cuerpo, produce un exceso de micotoxinas (sustancias tóxicas producidas por los hongos) y estas micotoxinas reducen dramáticamente el metabolismo de una persona y le hacen engordar. Hemos visto que ninguna persona, por mucho que trate, podrá bajar de peso si su infección de candida albicans es demasiado grande.'
        }, {
            tipo: 'IMAGE',
            text: 'https://img.europapress.es/fotoweb/fotonoticia_20180507115257_640.jpg'
        }],
        prueba: {
            pregunta: '¿Que es el Hongo Candida?',
            opciones: [
                'Es un hongo que venenoso que encontramos en los bosques.',
                'Es un hongo que vive en casi todas partes, incluso dentro de su cuerpo',
                'Es un hongo no venenoso que puede ser comestible'
            ],
            indexCorrecta: 2,
            premio: 1
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
                'Es una hormona que regula la sal en el cuerpo',
                'hormona producida por el páncreas, que contribuye a regular los niveles de glucosa en sangre',
                'Es un sustacion que combate la azucar en el cuerpo'
            ],
            indexCorrecta: 2,
            premio: 1
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
            indexCorrecta: 1,
            premio: 1
        }
    }]
}

const alimentacion = {
    nombre: 'Alimentacion',
    urlImage: 'https://www.ecestaticos.com/imagestatic/clipping/78e/458/78e458c5a29ae47ee828218afc325961/por-que-el-desayuno-es-la-comida-mas-importante-si-quieres-estar-delgado.jpg?mtime=1500459950',
    llaves: 1,
    temas: [{
        nombre: 'Alimentos tipo A y tipo E',
        contenido: [{
            tipo: 'TEXT',
            text: 'Para efectos de simplificar,podemos dividir  los alimentos en términos de cuánta insulina se produce cuando usted los consume. os alimentos que producen una reacción de poca insulina en el cuerpo son alimentos que ADELGAZAN. Por el contrario, los alimentos que producen en el cuerpo una reacción de mucha insulina son alimentos que ENGORDAN. En principio, y para efectos de lo que deseamos lograr a modo de dieta para adelgazar, solamente hay dos tipos de alimentos:'
        }, {
            tipo: 'IMAGE',
            text: 'https://2.bp.blogspot.com/-kWSx1Mx5gqA/WdZ-P8njhfI/AAAAAAAAA0E/I7HflNza0Vs3zqvY6DwVuQEH3Vc0VzNvgCLcBGAs/s1600/6-2-2014-5-49-39-PM.png'
        }, {
            tipo: 'TEXT',
            text: 'Si nosotros seleccionamos, como parte de nuestra dieta, más alimentos de los  que producen poca reacción de  insulina en el cuerpo (TIPO A) y menos de los que producen mucha reacción de insulina en  el  cuerpo  (TIPO  E)  empezaremos  a adelgazar. Cualquier régimen que reduzca la producción de insulina le hará reducir la  grasa  del  cuerpo ; o sea,  adelgazar.  Esperamos  que  esta  Guía  de  Alimentos TIPO A le permita comer y adelgazar saludablemente.'
        }],
        prueba: {
            pregunta: '¿Que efecto en el cuerpo tienen los alimentos tipo A y E respectivamente?',
            opciones: [
                'Los alimentos tipo A adelgazan y los tipo E engordan',
                'Los alimentos tipo A engordan y los tipo E adelgazan',
                'Los alimentos tipo A adelgazan y los tipo E adelgazan'
            ],
            indexCorrecta: 1,
            premio: 1
        }
    }, {
        nombre: 'Carne Blanca Vs Carne Roja',
        contenido: [{
            tipo: 'TEXT',
            text: 'Tanto las carnes rojas como las blancas constituyen un excelente aporte de proteínas de alta calidad y por este motivo su consumo es importante de cara a mantener una dieta equilibrada. Además de las proteínas, aportan minerales y vitaminas esenciales para el buen funcionamiento de nuestro organismo. \n Las carnes rojas hacen referencia a carne de vacuno, buey, caballo y a carne de caza (perdiz, codorniz, etc.), incluso a vísceras. La carne considerada o llamada blanca es la carne de pollo, pavo o conejo. La carne de cordero o cerdo puede variar en coloración, siendo roja o blanca dependiendo de la edad del animal o de la parte del cuerpo.\n Las carnes rojas y las vísceras contienen más cantidad de hierro que las blancas. También contienen en general más grasa y mayor cantidad de purinas. Las purinas son un producto de degradación de las proteínas y contribuyen a la formación de acido úrico, de ahí que los enfermos de gota deban abstenerse del consumo elevado de carne roja, ya que al tener cristales de ácido úrico en las articulaciones padecen artritis o inflamación de las articulaciones y el consumo elevado de carne roja puede empeorar estas patologías.\n La mayor cantidad de grasa y sangre de la carne roja le da a ésta más sabor y la hace más sabrosa, que por ejemplo la carne de pollo.\nEn términos generales, se recomienda el consumo de tres o cuatro raciones por semana de carne, permitiéndose que sea carne roja tres o cuatro veces al mes. Se considera más saludable el consumo de carne blanca, ya que ésta posee similar valor nutricional pero contiene menos grasa y menos purinas, que consumidas en exceso se relacionan directamente con la aparición de enfermedades cardiovasculares.'
        }, {
            tipo: 'IMAGE',
            text: 'data:image/jpeg;base64,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'
        }],
        prueba: {
            pregunta: '¿Que aporta la Carne Roja frente a la Carne blanca',
            opciones: [
                'Ambas son lo mismo',
                'Las carnes rojas contienen más cantidad de hierro , en general más grasa y mayor cantidad de purinas que las blancas .',
                'La carnte roja es mas saludable y nutritiva'
            ],
            indexCorrecta: 2,
            premio: 1
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
    llaves: 3,
    temas: [{
        nombre: 'Estres',
        contenido: [{
            tipo: 'TEXT',
            text: ' Sedentarismo e ingesta excesiva o inadecuada de alimentos, son las causas más comunes de sobrepeso u obesidad, donde obviamente habrá que descartar etiologías endógenas. No obstante, el estrés emocional - esa ansiedad desproporcionada e inoportuna- es uno de los estímulos nocivos más relevantes, porque nos induce a excedernos en la comodidad del descanso o en el placer de la mesa.\n El primitivo instinto de supervivencia y autorecompensa, reside básicamente en la comida. Y el desplacer o el agobio, a veces no reconocido pero constante, desequilibra el comportamiento alimentario, impulsándonos a buscar instintiva o emotivamente en la comida, la satisfacción perdida entre las penurias cotidianas: Importante factor a considerar, en el tratamiento de un paciente con exceso de peso de cualquier edad.\n Desde la delgadez extrema hasta la obesidad mórbida, atravesando una zona media de equilibrio, existen diversos grados de alteraciones ponderales, las cuales repercutirán en mayor o menor grado en la salud personal, en el estilo de vida profesional y familiar o finalmente en sobrecarga asistencial y económica sociales.\n Por tanto, un hambre desmedida o "ansia de picar" incontrolada, nunca es motivo de desatención o menosprecio, pues esos desajustes de actitud, al fin y al cabo disfunciones hipotalámicas y neurohormonales, portan una espoleta retardada de serias consecuencias. \n Los pequeños excesos crónicos en la comida y bebida, son más importantes que una accidental hipernutrición, pues producen de modo imperceptible, un aumento progresivo de peso, el cual súbitamente un día, sorprende por sus signos ésteticos inconfortables o con síntomas o padecimientos manifiestos.\n No debemos esperar a la obesidad manifiesta para insistir en una alimentación atractiva y equilibrada. Es conveniente hacerlo siempre, y más, ante una tendencia al sobrepeso.'
        }, {
            tipo: 'IMAGE',
            text: 'https://www.sanitas.es/media/imagen/original/imagen_dieta_psicol_estres_emocion_sobrepeso/estresemocionalsobrepeso.jpg'
        }],
        prueba: {
            pregunta: '¿Que impacto tienes el estres?',
            opciones: [
                'Cuando estoy estresado casi no como',
                'El estres no es un facto que influye en la alimentacion',
                'Es uno de los estímulos nocivos más relevantes, porque nos induce a excedernos en la comodidad del descanso o en el placer de la mesa'
            ],
            indexCorrecta: 2,
            premio: 1
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
    llaves: 4,
    temas: [{
            nombre: 'Atrofia Muscular',
            contenido: [{
                tipo: 'TEXT',
                text: 'La atrofia muscular es un término médico que se refiere a la disminución del tamaño del músculo, perdiendo fuerza éste debido a la relación con su masa.1​ Afecta a las células nerviosas de los músculos esqueléticos, generando parálisis. La parálisis puede ser parcial o completa y generalmente comienza insidiosamente.'
            }, {
                tipo: 'IMAGE',
                text: 'https://www.lavidalucida.com/wp-content/uploads/2015/10/3127063-130504224012.png'
            }],
            prueba: {
                pregunta: '¿Que es la atrofia muscular?',
                opciones: [
                    'Dolor en los musculos',
                    'Los musculos se agrandan',
                    'La disminución del tamaño del músculo, perdiendo fuerza'
                ],
                indexCorrecta: 3,
                premio: 1
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

(async() => {
    await main();
    console.log('LISTO');
})()