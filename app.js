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
     '-----END EC PRIVATE KEY-----',
    public : '-----BEGIN PUBLIC KEY-----\n' +
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
