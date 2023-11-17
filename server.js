const express = require("express");
const app = express();
const env =  require('dotenv').config();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./build"));
app.use(cors());


app.post("/api/contactme", (req, res) => {
    console.log(req.body)
// 						"HTMLPart": `<b>From: ${req.body.email} <br/><b>Name: ${req.body.name}</b><br/><b>Message: ${req.body.message}</b>`
});

app.post("/api/sms", (req, res) => {

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