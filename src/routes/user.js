const { Router } = require('express');

const User = require('../models/User.js');

const routerUser = Router();

const { verificarToken } = require('../middlewares/autenticacion.js');

routerUser.get('/:_idUser', async (req,res ) => {
  try{
    const { _idUser } = req.params;
    const user = await User.findById(_idUser);
    res.json({
      ok: true,
      user: user
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});

routerUser.put('/:_idUser', async (req , res) => {
  try{
    const { premio } = req.body;
    const { _idUser } = req.params;
    const updateUser = await User.findByIdAndUpdate(_idUser,{
      llaves: premio
    },{ new: true });
  
    res.json({
      ok: true,
      user: updateUser
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});

routerUser.get('/', verificarToken  ,async (req,res)=>{
  try{
    const users = await User.find({});
    res.json({
      ok: true,
      users:users
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});

module.exports = routerUser;