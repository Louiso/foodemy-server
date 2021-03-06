/* Aqui se encontrara todo respecto al login y registro de usuario */
const User = require('../models/User.js');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const route = Router();
const Subscripcion = require('../models/Subscripcion.js');
const Curso = require('../models/Curso.js');
route.post('/register',async (req,res)=>{
  const { username , password, email, altura, peso, edad, sexo } = req.body;
  try{
    let user;
    console.log({
      altura,
      peso,
      edad,
      sexo
    });
    if(altura && peso && edad && sexo){
      user = await User.create({
        username,
        password: bcrypt.hashSync(password, 10),
        email,
        altura,
        peso,
        edad,
        sexo
      })
    }else{
      user = await User.create({
        username,
        password: bcrypt.hashSync(password, 10),
        email,
      })
    }

    const cursoConceptos = await Curso.findOne({
      nombre: 'Conceptos'
    });
    await Subscripcion.create({
      _idUser: user._id,
      _idCurso: cursoConceptos._id
    })
    const token = jwt.sign({user},process.env.SECRET,{
      expiresIn: 60 * 60 * 24
    });
    console.log(token);
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