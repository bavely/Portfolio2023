const express = require("express");
const app = express();
const env =  require('dotenv').config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_SMS;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./build"));
app.use(cors());

// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//         user: 'basatwrx@gmail.com',
//         pass: 'PW4all@Bb17168'
//       },
//   });

var transport = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.BREVO_API_NAME,
      pass: process.env.BREVO_API_KEY
    }
  });
app.post("/api/contactme", (req, res) => {
    console.log(req.body)
    transport.sendMail({
        from: "bavelytawfik@gmail.com", // sender address
        to: "bavelytawfik@gmail.com", // list of receivers
        subject: "New Portfolio Message", // Subject line
        text: req.body.email, // plain text body
        html: `<b>From: ${req.body.email} <br/><b>Name: ${req.body.name}</b><br/><b>Message: ${req.body.message}</b>`, // html body
      }).then((info) => {
          res.json({
              success: true,
              info
          })
      }).catch((error) => {
          res.json({
              success: false,
              error
          })
      })
// 						"HTMLPart": `<b>From: ${req.body.email} <br/><b>Name: ${req.body.name}</b><br/><b>Message: ${req.body.message}</b>`
});

app.post("/api/sms", (req, res) => {
    let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

    let sendTransacSms = new SibApiV3Sdk.SendTransacSms();
    
    sendTransacSms = {
        "sender":"16266265854",
        "recipient":"16266265854",
        "content":req.body.message,
    };
    
    apiInstance.sendTransacSms(sendTransacSms).then(function(data) {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function(error) {
      console.error(error);
    });
    //     body: req.body.message,
})


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
// [END app]

module.exports = app;