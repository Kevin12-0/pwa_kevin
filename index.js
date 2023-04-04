const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

router.get("/app", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/js/app.a5008d55.js'));
});

router.get("/chunk-vendors", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/js/chunk-vendors.4d7ee3c4.js'));
});

router.get("/css", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/css/app.0457deba.css'));
});

router.get("/manifest", function (req, res) {
    res.sendFile(path.join(__dirname + '/views/manifest.json'));
});
app.use("/", router);
app.listen(process.env.port || 3000);

