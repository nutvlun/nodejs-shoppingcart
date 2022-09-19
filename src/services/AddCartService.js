const productRepo = require('../repositories/view/ProductRepositoryView');

async function add(req){
  const jsonBody  = req.body;
  const product = await productRepo.findById(jsonBody.product_id);
  if(product.length===0){
    throw ("Invalid Product!!!");
  }
  const chkArr  = req.session.sessInCart.find(data => data.product_id === jsonBody.product_id);
  if(chkArr){
    throw ("Duplicate product_id in this cart!!!");
  }
  req.session.sessInCart.push({
    "id": req.session.sessInCart.length+1,
    "product_id":jsonBody.product_id,
    "product_name": product[0].name,
    "unit_price": product[0].unitPrice,
    "quantity":jsonBody.quantity
  });
}

module.exports = {
  add,
}

//
// {
//   "code": 200/500/400
//   "status":"success/error",
//   "message":"user already exists",
//   "data":[]
// }