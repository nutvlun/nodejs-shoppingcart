const defCart = (req,res,next) => {
  if(!req.session.sessInCart){
    req.session.sessInCart = [];
  }
  next();
}

module.exports = {
  defCart
}