require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const roteador = require('./rotas/roteador')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/cotacoes', roteador)


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const url = process.env.MONGODB_URI
const port = process.env.port


mongoose.connect(url)
.then(() => {
    console.log('Conexão ao banco de dados estabelecida!')
    app.listen(port, () => {console.log(`Servidor rodando na porta ${port}!!!`)})

})
.catch((erro) => {
    console.log(erro)
})
