const express = require("express");
const app = express();
const env =  require('dotenv').config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require('@sendgrid/mail')
const accountSid = env.parsed.TWILIO_ACCOUNT_SID;
const authToken = env.parsed.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const mailjet = require('node-mailjet').apiConnect(
    env.parsed.MJ_APIKEY_PUBLIC,
    env.parsed.MJ_APIKEY_PRIVATE
  )


sgMail.setApiKey(env.parsed.SENDGRID_API_KEY)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./build"));
app.use(cors());


app.post("/api/contactme", (req, res) => {
    console.log("contact me");
    console.log(req.body);
    

    // const msg = {
    //     to: 'bavlesamy@gmail.com', // Change to your recipient
    //     from: 'bavelytawfik@gmail.com', // Change to your verified sender
    //     subject: req.body.email + " " + req.body.name + "from portfolio",
    //     text: req.body.message,
     
    //   }
    //   sgMail
    //     .send(msg)
    //     .then((message) => {
    //         console.log(message)
    //         res.json({ message: "success" });
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //         res.json({ message: "fail" });

    //     })

    const request = mailjet
	.post("send", {'version': 'v3.1'})
	.request({
		"Messages":[
				{
						"From": {
								"Email": "bavelytawfik@gmail.com",
								"Name": "Mailjet Pilot"
						},
						"To": [
								{
										"Email": "bavlesamy@gmail.com",
										"Name": "passenger 1"
								}
						],
						"Subject": req.body.email + " " + req.body.name + "from portfolio",
						"TextPart": req.body.message,
						"HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
				}
		]
	})
request
	.then((result) => {
		console.log(result, "success")
        res.json({ message: "success" });
	})
	.catch((err) => {
		console.log(err, "error")
        res.sendStatus(err.statusCode).send(err).json({ message: "fail" });
	})
});

app.post("/api/sms", (req, res) => {
    client.messages
    .create({
        body: req.body.message,
                from: env.parsed.TWILIO_NUMBER,
        to: '+16266265854'
    })
    .then(message => {
        res.json({ message: "success" });
    })
    .catch((error) => {
        console.error(error)
        res.json({ message: "fail" });

    })
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