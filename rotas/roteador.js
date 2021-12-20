const mensagemFormatada = require('../dialogflow/modelsResponse/mensagem')
const acionarEvento = require('../dialogflow/modelsResponse/acionarEvento')
const saudacoes = require('../dialogflow/intencoes/saudacoes');
const buscarVoo = require('../dialogflow/intencoes/buscarVoo')
const fallback = require('../dialogflow/intencoes/fallback/fallback')
const menuAjuda = require('../dialogflow/intencoes/menuAjuda')
const segundoFallback = require('../dialogflow/intencoes/fallback/fallback-2')
const segundoFallbackYes = require('../dialogflow/intencoes/fallback/fallback-2-yes')

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
            res.send(mensagemFormatada(fallback())) 
            break
        case 'Fallback - 2':
            res.send(mensagemFormatada(segundoFallback())) 
            break
        case 'Fallback - 2 - yes':
            res.send(acionarEvento(segundoFallbackYes()))
            break
        case 'Ajuda':
            res.send(mensagemFormatada(menuAjuda())) //arrumar texto
            break
        default:
            break;
        }
})


module.exports = roteador