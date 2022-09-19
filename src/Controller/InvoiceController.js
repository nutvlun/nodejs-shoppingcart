const invoiceHRepo = require('../repositories/view/InvoiceHRepositoryView');
const invoiceDtlRepo = require('../repositories/view/InvoiceDtlRepositoryView');
const pdfGenerator = require('../services/PdfGenerator');
const jwt = require("jsonwebtoken");
const showInvoiceAll = async function(req,res){
  const user  = await jwt.decode(req.token);
  const invoiceList  = await invoiceHRepo.findByUserId(user.id);
  return res.status(200).json(invoiceList);
}

const showInvoiceDtl = async function(req,res){
  const id = req.params.id;
  const invoice  = await invoiceDtlRepo.findByInvoiceHId(id);
  return res.status(200).json(invoice);
}

module.exports = {
  showInvoiceAll,
  showInvoiceDtl,
}
