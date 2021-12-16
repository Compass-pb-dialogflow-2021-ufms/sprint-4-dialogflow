require('dotenv').config()

const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('O banco tá on!'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json())

const rotaDinheiro = require('./rotas/dinheiro')
app.use('/dinheiroBot', rotaDinheiro)

app.listen(3000, () => console.log("A api tá on!"))