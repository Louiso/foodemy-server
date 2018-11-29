const Subscripcion = require('../models/Subscripcion.js');
const { Router } = require('express');

const routerSubs = Router();

routerSubs.put('/:_idSubscripcion', async (req,res) => {
  const { _idSubscripcion } = req.params;
  const { _idCurso: { temas }} = await Subscripcion.findById(_idSubscripcion).populate('_idCurso');
  const { temaActual: index } = req.body; 
  try{
    if( index >= temas.length) throw 'Acabaste el curso'
    const subscripcion = await Subscripcion.findByIdAndUpdate(_idSubscripcion,{
      temaActual: index
    },{
      new: true
    })
    res.json({
      ok: true,
      subscripcion: subscripcion
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});


routerSubs.get('/:_idUser/:_idCurso',async (req,res)=>{
  const { _idUser, _idCurso } = req.params;
  const subscripcion = await Subscripcion.findOne({
    _idUser: _idUser,
    _idCurso: _idCurso
  })
  if(!subscripcion){
    return res.json({
      ok:false,
      err: 'No existe subscripcion'
    });
  }
  res.json({
    ok: true,
    subscripcion: subscripcion
  });
});

routerSubs.post('/',async (req,res)=>{
  const { _idUser, _idCurso } = req.body;
  try{
    const subscripcion = await Subscripcion.create({
      _idUser: _idUser,
      _idCurso: _idCurso
    });
    res.json({
      ok: true,
      subscripcion: subscripcion
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});


module.exports = routerSubs;