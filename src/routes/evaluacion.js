const Evaluacion = require('../models/Evaluacion.js');
const { Router } = require('express');

const routerEval = Router();

/* Subscripcion y Tema */

routerEval.put('/:_idEvaluacion', async (req,res) => {
  const { respuesta } = req.body;
  const { _idEvaluacion } = req.params;
  try{
    const evaluacion = await Evaluacion.findByIdAndUpdate(_idEvaluacion, { respuesta: respuesta } ,{ new: true } );
    res.json({
      ok: true,
      evaluacion: evaluacion
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});


routerEval.get('/:_idSubscripcion/:_idTema',async (req,res)=>{
  const { _idSubscripcion , _idTema } = req.params;
  try{
    const evaluacion = await Evaluacion.findOne({
      _idSubscripcion: _idSubscripcion,
      _idTema: _idTema
    });

    if(!evaluacion) throw 'No existe esa evaluacion'

    res.json({
      ok: true,
      evaluacion: evaluacion
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});

routerEval.post('/',async (req,res)=>{
  const { _idSubscripcion, _idTema, respuesta } = req.body;
  try{
    const evaluacion = await Evaluacion.create({
      _idSubscripcion: _idSubscripcion,
      _idTema: _idTema,
      respuesta: respuesta
    });
    res.json({
      ok: true,
      evaluacion: evaluacion
    });

  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});


module.exports = routerEval;