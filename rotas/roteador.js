const mensagemFormatada = require('../dialogflow/modelsResponse/mensagem')
const saudacoes = require('../dialogflow/intencoes/saudacoes');

const roteador = require('express').Router()


roteador.post('', (req, res) =>
{
    const intencao = req.body.queryResult.intent.displayName
    switch (intencao) {
        case 'Saudações':
            const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
            res.send(mensagemFormatada(saudacoes(nome)))
            break;
        
        default:
            break;
        }
    console.log(intencao)
})


module.exports = roteador