const baseController  = require('../src/Controller/BaseController');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const bearerHeader = req.headers['authorization'];

  dotenv.config();

  if(typeof bearerHeader !== 'undefined'){
    const bearer  = bearerHeader.split(' ');
    req.token = bearer[1];

    if(jwt.verify(req.token,jwtSecretKey)){
      next();
    }else{
      return  res.status(401).json(baseController.returnError("Token Invalid!!!"));
    }

  }else{

    return  res.status(403).json(baseController.returnError("Please Sign In!!!"));

  }

}

module.exports = {
  requireAuth
}