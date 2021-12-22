const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passageiroSchema = new Schema({
    nome: {
        type: String,
        required: [true, 'Campo Obrigatório']
    },
    cpf: {
        type: String,
        required: [true, 'Campo Obrigatório']
    },
    dataNascimento: {
        type: String,
    },
    telefone: {
        type: String,
    },
});

const Passageiro = mongoose.model('passageiros', passageiroSchema);

module.exports = Passageiro;