const router = require('express').Router()
const formatedMessage = require('../dialogflow/modelsResponse/message')
const eventTrigger = require('../dialogflow/modelsResponse/eventTrigger')

//Intents
const welcome = require('../dialogflow/intents/welcome');
const fallback = require('../dialogflow/intents/fallback/fallback')
const helpMenu = require('../dialogflow/intents/helpMenu')
const secondFallback = require('../dialogflow/intents/fallback/fallback-2')
const secondFallbackYes = require('../dialogflow/intents/fallback/fallback-2-yes')
const aboutMe = require('../dialogflow/intents/aboutMe')
const goodbye = require('../dialogflow/intents/goodbye');

//Intents with external API call
const searchFlight = require('../dialogflow/intents/searchFlight')
const getStatus = require('../dialogflow/intents/getStatus')
const checkin = require('../dialogflow/intents/checkin')



router.post('', async (req, res) =>
{
    const intencao = req.body.queryResult.intent.displayName
    switch (intencao) {
        case 'Welcome':
            const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
            res.send(formatedMessage(welcome(nome))) //arrumar texto
            break
        case 'SearchFlight':
            searchFlight()
            res.send(formatedMessage('oi')) //arrumar texto e função
            break
            case 'GetStatus':
            const status = await getStatus(req.body.queryResult.parameters)
            res.send(formatedMessage(status)) //arrumar texto se req 200
            break
            case 'Checkin':
            const checkinCode = await checkin(req.body.queryResult.parameters)
            res.send(formatedMessage(checkinCode)) //arrumar texto se req 200
            break
        case 'Fallback':
            res.send(formatedMessage(fallback())) 
            break
        case 'SecondTimeInFallback':
            res.send(formatedMessage(secondFallback())) 
            break
        case 'Fallback - 2 - yes':
            res.send(eventTrigger(secondFallbackYes()))
            break
        case 'Help':
            res.send(formatedMessage(helpMenu())) //arrumar texto
            break
        case 'KnowAboutMe':
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