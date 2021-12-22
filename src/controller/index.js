const User = require("../db/userSchema")
const axios = require("axios")
//const Flight = require("../db/flightSchema")


const intents = async (req, res) => {
    const api = 'https://compasso-flight.herokuapp.com/api/v1'
    try {
        
        let rand //Answer Randomizer
        let displayName = req.body.queryResult.intent.displayName
        let platform = req.body.originalDetectIntentRequest.source
        platformVariables(req, platform)

        //Try to find user, if not found create database entry
        try {
            uid = await User.findOne( {
                userId : userId
            } ).orFail()
        } catch (error) {
            uid = ""
            if(platform !== 'DIALOGFLOW_CONSOLE') //Ignores Database write on Dialogflow Console
                User.create(req.body.originalDetectIntentRequest.payload.data.source)
        }

        switch (displayName) {
            
            //DEFAULT WELCOME INTENT START
            case 'Default Welcome Intent':
                try {
                    rand = Math.random() < 0.5 ? 0 : 1;
                    switch (rand) {
                        case 0:
                            if(uid.userId === userId) //If user is in Line or Telegram, and has used platform, send welcome back message.
                                res.json(answer("Olá! Que bom ver você novamente! Pode deixar que lhe ajudarei com sua viagem!")) 
                            else
                                res.json(answer("Olá! É um prazer te conhecer! Pode deixar que lhe ajudarei com sua viagem!"))                
                        break
                        case 1: //Alternative Greeting
                            if(uid.userId === userId)
                                res.json(answer("Oi! Seja bem vindo de volta! Vamos lá, vou te ajudar com sua viagem!")) 
                            else
                                res.json(answer("Oi! Hoje eu vou te ajudar com sua viagem, é um prazer lhe conhecer!"))         
                        break
                    }
                } catch (error) {
                    res.json(answer("Parece que estou fora do ar, tente novamente mais tarde! " + error))    
                }
            break
            //DEFAULT WELCOME INTENT END

            //ABOUT ME INTENT START
            case 'Default Welcome intent - About Me':
                try {
                    res.json(answer("Sou um bot feito exclusivamente para te auxiliar com suas viagens! Neste canal, você pode pesquisar voos, reservar uma passagem e fazer check-in! Fui desenvolvido por José Ferreira, você pode saber mais sobre aqui: https://linkedin.com/in/arisukhk/")) 
                } catch (error) {
                    res.json(answer("Parece que estou fora do ar, tente novamente mais tarde! " + error))
                }
            break
            //ABOUT ME INTENT END

            //HELP INTENT START
            case 'Help Intent':
                rand = Math.random() < 0.5 ? 0 : 1;
                switch (rand) {
                    case 0:
                        text = `Certo! Espero conseguir te ajudar hoje!\n`+
                        `Sou um bot feito exclusivamente para te auxiliar com suas viagens! Neste canal, você pode pesquisar voos, reservar uma passagem e fazer check-in!`+ 
                        `Você deseja consultar voos, reservar uma passagem, verificar seu voo, ou fazer o check-in?`
                        res.json(answer(text))
                    break

                    case 1:
                        text = `Ok! Estou aqui para te ajudar!\n`+
                        `Sou um bot feito exclusivamente para te auxiliar com suas viagens! Neste canal, você pode pesquisar voos, reservar uma passagem e fazer check-in!`+
                        `Você deseja consultar voos, reservar uma passagem, verificar seu voo, ou fazer o check-in?`
                        res.json(answer(text))
                    break
                }
            break
            //HELP INTENT END

            //STATUS INTENT START
            case 'Status Intent':
                const data = {
                    "flightCode": req.body.queryResult.parameters.flightCode,
                    "cpf": req.body.queryResult.parameters.cpf
                  }

                const config = {
                    method: 'post',
                    url: 'https://compasso-flight.herokuapp.com/api/v1/status',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : JSON.stringify(data)
                }
                  
                axios(config)
                    .then(function (response) {
                        res.json(answer(`${JSON.stringify(data.flightCode)}: ${response.data.message} `))
                    })
                    .catch(function (error) {
                        console.log(error)
                        res.json(answer(`${JSON.stringify(data.flightCode)}: ${error.response.data.message} `))
                    })
                break
            //STATUS INTENT END

            //CHECKIN INTENT START
            case 'Checkin Intent':
                const checkinDetails = {
                    "flightCode": req.body.queryResult.parameters.flightCode,
                    "cpf": req.body.queryResult.parameters.cpf,
                    "name": req.body.queryResult.parameters.name
                  }
                  try {
                    const checkin = await axios.post(api + '/checkin', checkinDetails)
                    res.json(answer(`Check-in realizado! Aqui está o código comprovante do seu checkIn: ${checkin.data.checkinCode}`))
                  } catch (error) {
                    res.json(answer(`No momento, não consegui processar seu check-in, ${checkinDetails.name}: ${error.response.data.message}`))
                  }
            break
            //CHECKIN INTENT END

            //BOOK TICKET INTENT START
            case 'Book Ticket Intent':
                const ticketDetails = {
                    "flightCode": req.body.queryResult.parameters.flightCode,
                    "name": req.body.queryResult.parameters.name,
                    "date": req.body.queryResult.parameters.date,
                    "time": req.body.queryResult.parameters.time
                }
                try {
                    //Should Ideally search for a flight and then offer it to the user, but hence search does not work, just mocks a reservation.
                    const reservation = await axios.post(api + '/reservation', ticketDetails)
                    res.json(answer(`Certo, ${ticketDetails.nome}! Passagem confirmada! Seu assento é ${reservation.data.passengers.seatGoing}, e seu vôo é as ${reservation.data.departureHour} do dia ${reservation.data.departureDate}`))
                } catch (error) {
                    res.json(answer(`Desculpe, não consegui comprar uma passagem no nome de ${ticketDetails.name} para ${ticketDetails.date} às ${ticketDetails.time}. Verifique os dados ou tente novamente mais tarde`))
                }
            break
            //BOOK TICKET INTENT END

            //GOODBYE INTENT START
            case 'Goodbye Intent':
                rand = Math.random() < 0.5 ? 0 : 1;
                switch (rand) {
                    case 0:
                        text = `Fique bem! Espero conseguir ter lhe ajudado hoje!`
                        res.json(answer(text))
                    break

                    case 1:
                        text = `Foi um prazer lhe auxiliar! Um ótimo dia!`
                        res.json(answer(text))
                    break
                }
            break
            //GOODBYE INTENT END

            //DEFAULT FALLBACK START
            case 'Default Fallback Intent':
                text = `Desculpe, mas não entendi direito.`+
                        `Caso esteja com alguma dificuldade, pode me pedir ajuda a qualquer momento!`
                res.json(answer(text))
            break
            //DEFAULT FALLBACK END
        }

    } catch (error) {
        res.json({ "fulfillmentText": "Oops! Algo de errado aconteceu. " + error })
        console.log(error.stack)
    }
}

const log = (req, res) => {
    res.json({ "fulfillmentText": "GET sucessful" })
}

//basic structure for dialogflow fulfillment text
function answer(text) {
    return { "fulfillmentText": text }
}

//sets ID based on user platform
function platformVariables(req, id) {
    if(id === 'line')
        userId = req.body.originalDetectIntentRequest.payload.data.source.userId
    if(id === 'telegram')
        userId = req.body.originalDetectIntentRequest.payload.data.from.id
    if(id === 'DIALOGFLOW_CONSOLE')
        userId = req.body.session
}

module.exports = {
    intents,
    log
}
