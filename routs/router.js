const router = require('express').Router()
const formatedMessage = require('../dialogflow/modelsResponse/mensagem')
const eventTrigger = require('../dialogflow/modelsResponse/eventTrigger')
const welcome = require('../dialogflow/intents/welcome');
const searchFlight = require('../dialogflow/intents/searchFlight')
const fallback = require('../dialogflow/intents/fallback/fallback')
const helpMenu = require('../dialogflow/intents/helpMenu')
const secondFallback = require('../dialogflow/intents/fallback/fallback-2')
const secondFallbackYes = require('../dialogflow/intents/fallback/fallback-2-yes')
const aboutMe = require('../dialogflow/intents/aboutMe')
const goodbye = require('../dialogflow/intents/goodbye')


router.post('', (req, res) =>
{
    const intencao = req.body.queryResult.intent.displayName
    switch (intencao) {
        case 'Welcome':
            const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
            res.send(formatedMessage(welcome(nome))) //arrumar texto
            break
        case 'Search flight':
            searchFlight()
            res.send(formatedMessage('oi')) //arrumar texto e função
        case 'Fallback':
            res.send(formatedMessage(fallback())) 
            break
        case 'Fallback - 2':
            res.send(formatedMessage(secondFallback())) 
            break
        case 'Fallback - 2 - yes':
            res.send(eventTrigger(secondFallbackYes()))
            break
        case 'Help':
            res.send(formatedMessage(helpMenu())) //arrumar texto
            break
        case 'Know about me':
            res.send(formatedMessage(aboutMe())) 
            break
        case 'Goodbye':
            res.send(formatedMessage(goodbye())) 
            break
        default:
            break;
        }
})


module.exports = router