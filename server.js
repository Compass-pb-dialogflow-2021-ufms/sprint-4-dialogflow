require('dotenv').config()

const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('O banco tá on!'))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const rotaAerobot = require('./rotas/aero')
app.use('/aerobot', rotaAerobot)

app.listen(3000, () => console.log("A api tá on!"))