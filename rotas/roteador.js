const mensagemFormatada = require('../dialogflow/modelsResponse/mensagem')
const saudacoes = require('../dialogflow/intencoes/saudacoes');
const buscarVoo = require('../dialogflow/intencoes/buscarVoo')
const fallback = require('../dialogflow/intencoes/fallback')
const menuAjuda = require('../dialogflow/intencoes/menuAjuda')
const segundoFallback = require('../dialogflow/intencoes/fallback-2')

const roteador = require('express').Router()


roteador.post('', (req, res) =>
{
    const intencao = req.body.queryResult.intent.displayName
    switch (intencao) {
        case 'Saudações':
            const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
            res.send(mensagemFormatada(saudacoes(nome))) //arrumar texto
            break
        case 'Buscar um voo':
            buscarVoo()
            res.send(mensagemFormatada('oi'))
        case 'Fallback':
            res.send(mensagemFormatada(fallback())) //arrumar texto
            break
        case 'Fallback - 2':
            res.send(mensagemFormatada(segundoFallback())) //arrumar texto
            break
        case 'Ajuda':
            res.send(mensagemFormatada(menuAjuda)) //arrumar texto
            break
        default:
            break;
        }
})


module.exports = roteador