const { urlencoded } = require('express')
const express = require('express')
const roteador = require('./rotas/roteador')


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/compassoVoos', roteador)


const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`Servidor rodando na porta ${port}`)})