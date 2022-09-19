const models = require("../../../models");

async function create(userId,invoiceNo,totalPrice) {
  const invoiceH = await models.InvoiceHs.create(
    {
      'userId': userId,
      'invoiceNo': invoiceNo,
      'totalPrice': totalPrice
    }
  )
  return invoiceH.id;
}

module.exports = {
  create
}