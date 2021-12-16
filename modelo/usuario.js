const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    idTelegram:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema)