const request = require('request-promise');

exports.requestCode = function (req, res, next) {
    if(!/^[0-9]{2,13}$/.test(req.body.phoneNumber)){
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
            "X-Authy-API-Key": "JmSraHUDW9uT6Fu1rT7iO8BdwLVYvhtd"
        }
    };
    // res.send({success:true});
    request(options)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
};

exports.verifyCode = function (req, res, next) {
    console.log("req.body", req.body);
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
            "X-Authy-API-Key": "JmSraHUDW9uT6Fu1rT7iO8BdwLVYvhtd"
        }
    };
    request(params)
        .then(response => {
            let ok = okCall(req, res, next);
            console.log(ok);
            res.send(response)
        })
        .catch(err => {
            // console.log("err");
            let ok = okCall(req, res, next);
            // console.log(ok);
            ok.then(res3 => {
                // console.log("res3", res3);
                ok.then(res4 => {
                    // console.log("res4", res4);
                    res.send(err)
                }).catch(e=>console.log(e));
            }).catch(e=>console.log(e));
        });
};

let okCall = function (req, res, next) {
    return new Promise((resolve, reject) => {
        request('https://requestb.in/1k9ajxf1', (err, res, body) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(body);
        });
    });
};
