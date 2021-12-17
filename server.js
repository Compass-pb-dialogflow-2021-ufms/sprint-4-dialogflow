const express = require('express');
const bodyParser = require("body-parser");
const controller = require('./controllers/controller');
const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('servidor rodando');
})

app.post("/", controller)

app.listen(process.env.PORT || 3000, () => {
    console.log('Rodando em http://localhost:3000');
})