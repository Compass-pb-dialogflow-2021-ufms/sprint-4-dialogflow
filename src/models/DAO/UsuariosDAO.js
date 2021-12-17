const mongoose = require('../../database/connection')

const UsuariosSchema = new mongoose.Schema({
    nome: {
          type: String
        , required: true
    },
    userId: {
          type: String
        , unique: true
        , required: true
    }
})

const Usuarios = mongoose.model('usuarios', UsuariosSchema)

module.exports = Usuarios