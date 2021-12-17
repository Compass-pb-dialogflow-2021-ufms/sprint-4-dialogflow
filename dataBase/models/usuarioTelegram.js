const mongoose = require('mongoose')


const UsuarioTelegram = mongoose.model('UsuarioTelegram', {
    id: String,
    nome: String
})


module.exports = UsuarioTelegram