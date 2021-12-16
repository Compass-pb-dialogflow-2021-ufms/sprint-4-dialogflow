const moongose = require('mongoose');

const Schema = moongose.Schema;

const usuarioSchema = new Schema({
    primeiroNome: {type: String, required: true,},
    idUsuario: {type: String, required: true}
},);

const usuario = moongose.model('usuario', usuarioSchema);

module.exports = usuario;