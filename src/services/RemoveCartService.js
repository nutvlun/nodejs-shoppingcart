const productRepo = require('../repositories/view/ProductRepositoryView');

async function remove(req){
  const jsonBody  = req.body;
  const chkArr  = req.session.sessInCart.find(data => data.product_id === jsonBody.product_id);
  if(!chkArr){
    throw ("Not Exist product_id in this cart!!!");
  }
  req.session.sessInCart = req.session.sessInCart.filter(data => data.product_id !== jsonBody.product_id);
  return true;
}

module.exports = {
  remove,
}