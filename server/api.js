const express = require('express');
const bodyParser = require('body-parser');
const sms = require('./routes/sms');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
app.post('/requestCode', sms.requestCode);
app.post('/verifyCode', sms.verifyCode);

module.exports = app;
