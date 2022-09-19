const express = require('express');
const router  = express.Router();

const ProductController = require("../src/Controller/ProductController");
const UserController = require("../src/Controller/UserController");
const CartController = require("../src/Controller/CartController");
const InvoiceController = require("../src/Controller/InvoiceController");

const authMiddleware = require("../middleware/authMiddleware");
const cartMiddleware = require("../middleware/cartMiddleware");

const signUpValidator = require("../src/validators/SignUpValidator");
const path  = require('path');


router.get('/',function (req,res){
  res.send('hello Main');
});
router.get('/product',
  ProductController.showProductAll
);
router.get('/product/:id',
  ProductController.showProductId
);

router.post('/user/signup',
  signUpValidator.signUpValidateCnf,
  signUpValidator.signUpValidate,
  UserController.signUp
);

router.post('/user/signin',
  UserController.signIn
);

router.get('/incart',
  authMiddleware.requireAuth,
  cartMiddleware.defCart,
  CartController.inCart
);

router.post('/incart/add',
  authMiddleware.requireAuth,
  cartMiddleware.defCart,
  CartController.addCart
);

router.post('/incart/remove',
  authMiddleware.requireAuth,
  cartMiddleware.defCart,
  CartController.removeCart
);

router.post('/incart/checkout',
  authMiddleware.requireAuth,
  cartMiddleware.defCart,
  CartController.checkOut
);

router.get('/invoice/',
  authMiddleware.requireAuth,
  InvoiceController.showInvoiceAll
);

router.get('/invoice/:id',
  authMiddleware.requireAuth,
  InvoiceController.showInvoiceDtl
);
module.exports  = router;