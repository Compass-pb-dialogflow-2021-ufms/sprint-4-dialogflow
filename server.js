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
const port = process.env.port || 3000


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@exercicio1.c2pva.mongodb.net/usuariosConversor?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conexão ao banco de dados estabelecida!')
    app.listen(port, () => {console.log(`Servidor rodando na porta ${port}!!!`)})

})
.catch((erro) => {
    console.log(erro)
})
