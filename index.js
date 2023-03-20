const express = require('express');
const app = express();

const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'))
});


app.use("/", router);
app.listen(process.env.port || 8000);

console.log("activo en 8000");