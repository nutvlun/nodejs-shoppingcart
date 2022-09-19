const pdf = require("pdf-creator-node");
const fs = require("fs");
const invoiceHRepo = require('../repositories/view/InvoiceHRepositoryView');
const invoiceDtlRepo = require('../repositories/view/InvoiceDtlRepositoryView');


async function create(id){
  const invoiceH  = await invoiceHRepo.findById(id);
  const invoiceDtl  = await invoiceDtlRepo.findByInvoiceHId(id);
  await console.log(invoiceH);
  await generator(invoiceH,invoiceDtl);
  return true;
}

async function generator(header,detail){
  const html =  fs.readFileSync("./templates/invoiceTemplate.html", "utf8");
  const options = {
    format: "A4",
    orientation: "portrait",
    border: "5mm",
    header: {
      height: "10mm",
      contents: '<div style="text-align: center;">Node.js |> Shopping Cart</div>'
    },
    footer: {
      height: "10mm",
      contents: {
        first: 'Cover page',
        2: 'Second page', // Any page number is working. 1-based index
        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
        last: 'Last Page'
      }
    }
  };

  const document = {
    html: html,
    data: {
      dataHeader: await header,
      dataDetail: await detail
    },
    path: "./public/invoices/output.pdf",
    type: "",
  };
  await console.log(header.invoiceNo);
  await pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

}

module.exports = {
  create,
}
