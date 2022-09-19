const baseController  = require('../Controller/BaseController');
const signUpService   = require('../services/SignUpService');
const signInService   = require('../services/SignInService');

const signUp = async function(req,res){
  try{
    const result = await signUpService.create(req);
    return  res.status(200).json(baseController.returnSuccess("Create User Success!!"));
  }catch (error) {
    return  res.status(400).json(baseController.returnError(error));
  }
}

const signIn  = async function(req,res){
  try{
    const user = await signInService.signIn(req);
    const userToken = await signInService.createToken(user);
    return  res.status(200).json(baseController.returnSuccess("Sign In Success!!",{"token": userToken}));
  }catch (error) {
    return  res.status(400).json(baseController.returnError(error));
  }
}

module.exports = {
  signUp,
  signIn
}

