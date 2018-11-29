const Ciclo = require('../models/Ciclo.js');
const { Router } = require('express');

const routeCiclo = Router();

routeCiclo.get('/',async (req,res)=>{
  try{
    const ciclos = await Ciclo.find({}).populate('cursos')
    res.json({
      ok: true,
      ciclos: ciclos
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});

module.exports = routeCiclo;