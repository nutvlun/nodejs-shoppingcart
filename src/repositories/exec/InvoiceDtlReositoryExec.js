const models = require("../../../models");

async function create(invoiceHId,obj) {
  const invoiceDtl = await models.InvoiceDtls.create(
    {
      'invoiceH_id': invoiceHId,
      'product_id': obj.product_id,
      'quantity': obj.quantity,
      'unitPrice': obj.unit_price,
    }
  )
  return invoiceDtl.id;
}

module.exports = {
  create
}