const ProductRepository = require('../repositories/view/ProductRepositoryView');
const showProductAll = async function(req,res){
  const productList  = await ProductRepository.findAll();
  return res.status(200).json(productList);
}

const showProductId = async function(req,res){
  const id = req.params.id;
  const product  = await ProductRepository.findById(id);
  return res.status(200).json(product);
}

module.exports = {
  showProductAll,
  showProductId,
}

