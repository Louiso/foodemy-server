const { Router } = require('express');

const User = require('../models/User.js');

const routeUser = Router();

const { verificarToken } = require('../middlewares/autenticacion.js');

routeUser.get('/', verificarToken  ,async (req,res)=>{
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

module.exports = routeUser;