require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Importar rotas.
const root = require('./routes/root')

// Rotas.
app.use('/', root)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App listening on port: ${port}.`)
})