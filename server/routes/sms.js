const request = require('request-promise');
const apiKey = "JmSraHUDW9uT6Fu1rT7iO8BdwLVYvhtd";
let async = require('asyncawait/async');
let await = require('asyncawait/await');
const logger = require('../logger');

let okCall = function (bodyData) {
  let options = {
    method: 'POST',
    uri: 'https://requestb.in/tua9ertu',
    body: bodyData || {},
    json: true,
  };
  return new Promise((resolve, reject) => {
    request(options)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

exports.requestCode = function (req, res) {
  /* Check the phone number*/
  if (!/^[0-9]{2,13}$/.test(req.body.phoneNumber)) {
    res.status(400).send('The number is incorrect');
    return;
  }
  const options = {
    method: 'POST',
    uri: 'https://api.authy.com/protected/json/phones/verification/start',
    body: {
      via: 'sms',
      country_code: "49",
      phone_number: req.body.phoneNumber
    },
    json: true,
    headers: {
      "X-Authy-API-Key": apiKey
    }
  };
  request(options)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.verifyCode = function (req, res) {
  let params = {
    method: 'GET',
    uri: 'https://api.authy.com/protected/json/phones/verification/check',
    body: {
      phone_number: req.body.phoneNumber,
      country_code: '49',
      verification_code: req.body.code
    },
    json: true,
    headers: {
      "X-Authy-API-Key": apiKey
    }
  };
  request(params)
    .then(response => {
      console.log(response);
      //     if (true) {
      // (async(function () {
      okCall({phone: req.body.phoneNumber}).then(res3 => {
        console.log(res3);
        okCall({status: 'ok'})
          .then(res4 => {
            console.log(res4);
            res.send({
                success: true,
                message: res4
            });
          }).catch(err => {
          res.send(err);
        })
      }).catch(err => {
        res.send(err);
      });
      // }))();
      // }
    })
    .catch(err => {
      logger.error(err.message);
      res.send(err);
    });
};
