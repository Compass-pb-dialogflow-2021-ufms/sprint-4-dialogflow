const roteador = require('express').Router()
const boasVindas = require('../dialogflow/intencoes/saudacoes')
const getPrincipaisCotacoes = require('../dialogflow/intencoes/getPrincipaisCotacoes')
const converteValor = require('../dialogflow/intencoes/conversaoValores/converteValor')
const fallback = require('../dialogflow/intencoes/fallback')
const menuAjuda = require('../dialogflow/intencoes/menuAjuda')


roteador.post('', (req, res) => {
    const intencao = req.body.queryResult.intent.displayName
    switch (intencao) {
        case 'Saudação':
            boasVindas(req, res)
            break
        case 'Ver principais cotações':
            getPrincipaisCotacoes(req, res)
            break
        case 'Converter um valor':
            converteValor(req, res)
            break
        case 'Ajuda':
            menuAjuda(req, res)
            break
        case 'Fallback Intent - yes':
            menuAjuda(req, res)
            break
        default:
            fallback(req, res)
            break
    }
})


module.exports = roteador