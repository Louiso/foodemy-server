/* Aqui se encontrara todo respecto al login y registro de usuario */
const User = require('../models/User.js');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const route = Router();

route.post('/register',async (req,res)=>{
  const { username , password, email } = req.body;
  try{
    const user = await User.create({
      username,
      password: bcrypt.hashSync(password, 10),
      email
    })
    const token = jwt.sign({user},process.env.SECRET,{
      expiresIn: 60 * 60 * 24
    }); 
    res.json({
      ok: true,
      user: user,
      token: token
    });
  }catch(err){
    res.json({
      ok: false,
      err: err
    })
  }
});

route.post('/login',async(req,res)=>{
  console.log(req.body);
  try{
    const user = await User.findOne({
      email: req.body.email
    })

    if(!user) return res.status(404).json({
      ok:false,
      err: 'Usuario o contraseña incorrectos'
    })

    if(!bcrypt.compareSync(req.body.password, user.password)) return res.status(404).json({
      ok:false,
      err: 'Usuario o contraseña incorrectos'
    })
    
    const token = jwt.sign({user},process.env.SECRET,{
      expiresIn: 60 * 60 * 24
    }); 
    res.json({
      ok: true,
      user: user,
      token: token 
    });

  }catch(err){
    res.json({
      ok: false,
      err: err
    });
  }
});

module.exports = route;