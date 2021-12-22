const express = require('express');
const app = express();
const mongoose = require('mongoose');

const controller = require('./controller/controller')

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Servidor rodando');
})

app.post("/", controller)

mongoose.connect(
    'mongodb+srv://vdlandim:123456abc@nodejscluster.ygy5j.mongodb.net/compassoVoosDB?retryWrites=true&w=majority'
).then(() => {
    console.log("Conectado ao banco contatoDB")
    app.listen(process.env.PORT || 3000, () => {
        console.log('Rodando em  http://localhost:3000');
    })
})

module.exports = app;