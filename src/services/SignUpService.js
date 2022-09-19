const userExec = require('../repositories/exec/UserRepositoryExec');
const userRepo = require('../repositories/view/UserRepositoryView');
const bcrypt = require('bcrypt');

async function create(req){
  const jsonBody  = req.body;
  const password = jsonBody.password;
  const salt = await bcrypt.genSalt(5);

  const chkUser = await userRepo.findByUsername(jsonBody.username);
  if(chkUser.length>0){
    throw ("Duplicate User!!!");
  }

  jsonBody.password = await bcrypt.hash(password, salt);
  const result = userExec.create(jsonBody);
  if(!result){
    throw ("Something is error!!!");
  }else{
    return result;
  }


}

module.exports = {
  create
}