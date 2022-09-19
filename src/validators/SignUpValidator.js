const {body, validationResult } = require('express-validator');

const signUpValidateCnf = [
  body("email").isEmail()
    .withMessage('Invalid Email!!'),
  body("username").notEmpty()
    .withMessage('Username is not empty')
    .isLength({min: 5})
    .withMessage('Username Password at least 5 characters'),
  body("password")
    .isLength({min: 5})
    .withMessage('Username Password at least 5 characters')
]

const signUpValidate = (req,res,next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json(errors);
  }else{
    next();
  }


}

module.exports = {
  signUpValidateCnf,
  signUpValidate,
}