const express = require('express')
const roteador = express.Router()
const controladorDePedidos = require('../controlador/controladorDePedidos')

roteador.post('/', controladorDePedidos.botDePedidos)

module.exports = roteador