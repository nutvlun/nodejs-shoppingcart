const invoiceHExec = require('../repositories/exec/InvoiceHReositoryExec');
const invoiceDtlExec = require('../repositories/exec/InvoiceDtlReositoryExec');
const jwt = require('jsonwebtoken');

async function create(req){
  const jsonBody  = req.body;
  const user  = jwt.decode(req.token);
  const invoiceNo = new Date().getTime();
  if(jsonBody.action!=='checkout'){
    throw ("Invalid Command!!!");
  }
  if(req.session.sessInCart.length===0){
    throw ("Your cart is empty!!!");
  }

  const totalPrice = req.session.sessInCart.reduce(function (prev, curr) {
    return prev + (curr.unit_price*curr.quantity);
  }, 0);

  const invoiceHId = await invoiceHExec.create(user.id,invoiceNo,totalPrice);
  await req.session.sessInCart.forEach(function(inCart, index) {
     invoiceDtlExec.create(invoiceHId,inCart);
  });
  await req.session.destroy();
  return invoiceNo;
}

module.exports = {
  create,
}