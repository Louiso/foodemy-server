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

module.exports = routeCurso;