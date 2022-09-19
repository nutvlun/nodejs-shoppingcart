const models = require("../../../models");

async function findAll() {
  return await models.InvoiceDtls.findAll(
    {
      attributes: [['product_id', 'ProductId'], 'quantity','unitPrice'],
      include: [
        {
          model: models.Products,
          as : 'Products',
          attributes: [['name', 'product_name']],
        }
      ]
    }
  );
}

async function findByInvoiceHId(id) {

  return await models.InvoiceDtls.findAll(
    {
      attributes: [['product_id', 'ProductId'],'quantity','unitPrice'],
      where: {
        'invoiceH_id': id
      },
      include: [
        {
          model: models.Products,
          as : 'Products',
          attributes: [['name', 'product_name']],
        }
      ]
    }
  );

}

module.exports = {
  findAll,
  findByInvoiceHId
}