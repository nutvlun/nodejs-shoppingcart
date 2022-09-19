const models = require("../../../models");

async function findAll() {
  return await models.Product.findAll(
    {
      attributes: ['id', 'name', 'unitPrice']
    }
  );
}

async function findById(id) {
  return await models.Product.findAll(
    {
      where:{
        'id': id
      }
    }
  );
}

module.exports = {
  findAll,
  findById
}