const Curso = require('../models/Curso.js');
const { Router } = require('express');

const routeCurso = Router();

routeCurso.get('/',async (req,res)=>{
  try{
    const cursos = await Curso.find({})
  
    res.json({
      ok: true,
      cursos: cursos
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
})

routeCurso.get('/:_idCurso', async (req,res) => {
  try{
    const { _idCurso } = req.params;
    const curso = await Curso.findById(_idCurso)
      .populate({
        path: 'temas', 
        select: 'nombre prueba'
      })
    console.log(curso)
    if(!curso) throw 'No hay curso'
    res.json({
      ok: true,
      curso: curso
    })
  }catch(e){
    res.json({
      ok: false,
      err: err
    });
  }
})

module.exports = routeCurso;