const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const session = require('express-session-jwt')
const router  = require('./routers/routers');

const app = express();
dotenv.config();

app.use(morgan('combined'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  keys: {
    private : '-----BEGIN EC PRIVATE KEY-----\n' +
      'MHQCAQEEICctefyrIcmIz9pG6xvGLzZNDP8AxxPQaq3FY5Wdbr0poAcGBSuBBAAK\n' +
      'oUQDQgAEwbjiSSmtstCfXy5GczTx9hiD1+LbCfwcfU1Hzj4oXl8hLCyzcm2cbPYs\n' +
      'o0rBNhscHXvMYirMkqQLXv9sf7DhwQ==\n' +
      '-----END EC PRIVATE KEY-----',
    public : '-----BEGIN PUBLIC KEY-----\n' +
      'MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEwbjiSSmtstCfXy5GczTx9hiD1+LbCfwc\n' +
      'fU1Hzj4oXl8hLCyzcm2cbPYso0rBNhscHXvMYirMkqQLXv9sf7DhwQ==\n' +
      '-----END PUBLIC KEY-----'
  },
  resave:false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(router);
app.listen(3000,()=>{
  console.log('Server Running..')
});
