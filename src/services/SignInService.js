const userRepo = require('../repositories/view/UserRepositoryView');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

async function signIn(req){
  const jsonBody  = req.body;
  const chkUser = await userRepo.findByUsername(jsonBody.username);
  if(chkUser.length===0){
    throw ("Invalid User!!!");
  }
  const chkPwd = await bcrypt.compare(jsonBody.password, chkUser[0].password);
  if(chkPwd){
    return chkUser[0];
  }else{
    throw ("Invalid Password!!!");
  }

}
async function createToken(user){
  dotenv.config();
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const data = {
    id: user.id,
    username: user.userName,
    email: user.email,
    time: Date()
  }
  return jwt.sign(data, jwtSecretKey);
}

module.exports = {
  signIn,
  createToken
}