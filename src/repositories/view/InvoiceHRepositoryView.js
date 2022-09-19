const models = require("../../../models");

async function findAll() {
  return await models.InvoiceHs.findAll(
    {
      attributes: ['id', 'userId',['invoiceNo','invoiceNo'],['totalPrice','totalPrice']]
    }
  );
}

async function findById(id) {
  return await models.InvoiceHs.findAll(
    {
      attributes: ['id', 'userId',['invoiceNo','invoiceNo'],['totalPrice','totalPrice']],
      where:{
        'id': id
      },
      include:[
        {
          model: models.User,
          as : 'User',
          attributes: ['userName','email'],
        }
      ]
    }
  );
}

async function findByUserId(id) {
  return await models.InvoiceHs.findAll(
    {
      where:{
        'userId': id
      },
      include:[
        {
          model: models.User,
          as : 'User',
          attributes: ['userName','email'],
        }
      ]
    }
  );
}

module.exports = {
  findAll,
  findById,
  findByUserId
}