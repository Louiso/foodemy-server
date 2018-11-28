const jwt = require('jsonwebtoken');

const verificarToken = async (req,res,next) => {
  const token = req.get('token');

  try{
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    next();
  }catch(err){
    res.status(401).json({
      ok: false,
      err: err
    })
  }

}

module.exports = {
  verificarToken
}