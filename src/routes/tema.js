const Tema = require('../models/Tema.js');
const {Router} = require('express');

const routerTema = Router();

routerTema.get('/:_idTema',async (req,res)=>{
  try{
    const tema = await Tema.findById(req.params._idTema);
    res.json({
      ok: true,
      tema: tema
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }

});

routerTema.post('/', async (req,res) => {
  res.json({
    ok: true
  });
})

module.exports = routerTema;