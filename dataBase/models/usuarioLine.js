const mongoose = require('mongoose')


const UsuarioLine = mongoose.model('UsuarioLine', {
    id: String
})


module.exports = UsuarioLine