const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000
const http = require('http');
const server = http.createServer(app);


const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/templates/index.html'))
});

server.listen(PORT, () => console.log('listening on port'));