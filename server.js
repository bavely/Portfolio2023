const express = require("express");
const app = express();
const env =  require('dotenv').config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require('@sendgrid/mail')
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
    

    const msg = {
        to: 'bavlesamy90@hotmail.com', // Change to your recipient
        from: 'bavlesamy@gmail.com', // Change to your verified sender
        subject: req.body.email + " " + req.body.name + "from portfolio",
        text: req.body.message,
     
      }
      sgMail
        .send(msg)
        .then(() => {
            res.json({ message: "success" });
        })
        .catch((error) => {
            console.error(error)
            res.json({ message: "fail" });

        })
});


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