const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.UrlBd;
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const conexao = mongoose.connect(url, opcoes);

module.exports = conexao;