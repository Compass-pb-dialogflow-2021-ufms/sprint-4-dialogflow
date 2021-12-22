const { search, reservation, checkin, status } = require('../API/connection')
const {response} = require("express");

const switchIntent = (req, res, intent) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res)
            break
        case 'Default Fallback Intent':
            defaultFallbackIntent(req, res)
            break
        case 'Help Intent':
            helpIntent(req, res)
            break
        case 'About me Intent':
            aboutMeIntent(req, res)
            break
        case 'Farewell Intent':
            farewellIntent(req, res)
            break
        case 'Start Search Intent':
            startSearchIntent(req, res)
            break
        case 'Where From Intent':
            whereFromIntent(req, res)
            break
        case 'Where To Intent':
            whereToIntent(req, res)
            break
        case 'Departure Date Intent':
            departureDateIntent(req, res)
            break
        case 'Return Date Intent':
            returnDateIntent(req, res)
            break
        case 'Pre Reservation Intent':
            preReservationIntent(req, res)
            break
        case 'Passenger Data Intent':
            passengerDataIntent(req, res)
            break
        case 'Seats Intent':
            seatsIntent(req, res)
            break
        case 'Pre Checkin Intent':
            preCheckinIntent(req, res)
            break
        case 'Checkin Intent':
            checkinIntent(req, res)
            break
        case 'Pre Status Intent':
            preStatusIntent(req, res)
            break
        case 'Status Intent':
            statusIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Olá sou seu agente pessoal de viagens. '
            + 'Caso deseje conhecer ou rever minhas funções é so pedir por ajuda.\n\n'
            + 'Como posso te ajudar hoje ?'
        ]
    }

    res.send(response)
}

const defaultFallbackIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Desculpe mas parece que eu não trato desse assunto.\n\n'
            + 'Se estiver com dificuldades é so pedir por ajudanque mostrarei minhas funções.'
        ]
    }

    res.send(response)
}

const helpIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Menu:\n\n'
            + '    Buscar por passagens aéreas.\n'
            + '    Fazer reserva.\n'
            + '    Fazer check-in.\n'
            + '    Verificar status do voo.\n\n'
            + 'No que mais posso lhe ajudar ?'
        ]
    }

    res.send(response)
}

const aboutMeIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Eu sou seu agente pessoal de viagens e estou aqui para te auxiliar em cada etapa até sua poltrona no avião.\n'
            + 'E para isso tenho várias funções para te atender. '
            + 'Que tal começarmos pela busca de passagens aéreas ?\n\n'
            + 'Caso precise, pode me pedir por ajudar que irei listar todas minhas funções.'
        ]
    }

    res.send(response)
}

const farewellIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Caso precise de mim estarei sempre aqui para te dar suporte com suas passagens aéreas.\n\n'
            + 'Espero ter te ajudado desta vez e até logo.'
        ]
    }

    res.send(response)
}

const startSearchIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Para começar a busca de passagens para você, irei fazer algumas perguntas.\n\n'
            + 'De qual aeroporto vai ser a partida ?'
        ]
    }

    res.send(response)
}

const whereFromIntent = (req, res) => {
    const response = {
        fulfillmentText:[
            'E em qual vai desembarcar ?'
        ]
    }

    res.send(response)
}

const whereToIntent = (req, res) => {
    const whereFrom = req.body.queryResult.outputContexts[1].parameters.whereFrom
        , whereTo   = req.body.queryResult.outputContexts[0].parameters.whereTo

    const response = {
        fulfillmentText: [
              `Anotado de ${whereFrom} para ${whereTo}.\n\n`
            + 'Qual será a data de ida ?'
        ]
    }

    res.send(response)
}

const departureDateIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            'E para finalizar, qual a data para a volta ?'
        ]
    }

    res.send(response)
}

const returnDateIntent = (req, res) => {
    const whereFrom     = req.body.queryResult.outputContexts[1].parameters.whereFrom
        , whereTo       = req.body.queryResult.outputContexts[1].parameters.whereTo
        , departureDate = (req.body.queryResult.outputContexts[1].parameters.departureDate).split('T')[0]
        , returnDate    = (req.body.queryResult.outputContexts[1].parameters.returnDate).split('T')[0]

    const response = {
        fulfillmentText: [
              'Veja as passagens que econtrei para você:\n\n'
            + '[OPÇÂO 1]\n'
            + 'Companhia: Azul\n'
            + 'Ida:\n'
            + `    Local: ${whereFrom}\n`
            + `    Data: ${departureDate}\n`
            + '    Hora de embarque: 12:35\n'
            + '    Poltronas: 9E 1F\n'
            + 'Volta:\n'
            + `    Local: ${whereTo}\n`
            + `    Data: ${returnDate}\n`
            + '    Hora de embarque: 18:35\n'
            + '    Poltronas: 2F\n'
            + 'Preço: R$ 1252,23\n\n'
            + '[OPÇÂO 2]\n'
            + 'Companhia: Gol\n'
            + 'Ida:\n'
            + `    Local: ${whereFrom}\n`
            + `    Data: ${departureDate}\n`
            + '    Hora de embarque: 08:25\n'
            + '    Poltronas: 3B 8C 9C\n'
            + 'Volta:\n'
            + `    Local: ${whereTo}\n`
            + `    Data: ${returnDate}\n`
            + '    Hora de embarque: 12:35\n'
            + '    Poltronas: 4A\n'
            + 'Preço: R$ 1322,18\n\n'
            + '[OPÇÂO 3]\n'
            + 'Companhia: LATAM\n'
            + 'Ida:\n'
            + `    Local: ${whereFrom}\n`
            + `    Data: ${departureDate}\n`
            + '    Hora de embarque: 18:30\n'
            + '    Poltronas: 1A 8A 3F\n'
            + 'Volta:\n'
            + `    Local: ${whereTo}\n`
            + `    Data: ${returnDate}\n`
            + '    Hora de embarque: 22:15\n'
            + '    Poltronas: 3D\n'
            + 'Preço: R$ 1126,49\n\n'
            + 'Qual dessas opções deseja reservar ?'
        ]
    }

    res.send(response)
}

const preReservationIntent = (req, res) => {
    const response = {
        fulfillmentText: [
              'Vou precisar de alguns dados pessoas, tudo bem ?\n\n'
            + 'Preciso que informe o seu completo, CPF (com pontuação), data de nascimento e telefone (com pontuação) para contato.'
        ]
    }

    res.send(response)
}

const passengerDataIntent = (req, res) => {
    const option = req.body.queryResult.outputContexts[1].parameters.option
    let   seatsGoing
        , seatsReturn

    switch (option) {
        case 1:
            seatsGoing = '9E ou 1F'
            seatsReturn = '2F'
            break
        case 2:
            seatsGoing = '3B, 8C ou 9C'
            seatsReturn = '4A'
            break
        case 3:
            seatsGoing = '1A, 8A ou 3F'
            seatsReturn = '3D'
            break
    }
    const response = {
        fulfillmentText: [
            `Por favor escolha sua potrona de ida: ${seatsGoing} e sua poltrona de volta ${seatsReturn}`
        ]
    }

    res.send(response)
}

const seatsIntent = async (req, res) => {
    try {
        const option        = req.body.queryResult.outputContexts[0].parameters.option
            , whereFrom     = req.body.queryResult.outputContexts[0].parameters.whereFrom
            , whereTo       = req.body.queryResult.outputContexts[0].parameters.whereTo
            , departureDate = (req.body.queryResult.outputContexts[0].parameters.departureDate).split('T')[0]
            , returnDate    = (req.body.queryResult.outputContexts[0].parameters.returnDate).split('T')[0]
            , name          = req.body.queryResult.outputContexts[0].parameters.name.name
            , cpf           = req.body.queryResult.outputContexts[0].parameters.cpf
            , birthDate     = (req.body.queryResult.outputContexts[0].parameters.birthDate).split('T')[0]
            , seatGoing     = req.body.queryResult.outputContexts[0].parameters.seatGoing
            , seatReturn    = req.body.queryResult.outputContexts[0].parameters.seatReturn
            , phone         = req.body.queryResult.outputContexts[0].parameters.phone
        let   price
            , departureHour
            , returnHour
            , company

        switch (option) {
            case 1:
                price = 1252.23
                departureHour = '12:35'
                returnHour = '18:35'
                company = 'Azul'
                break
            case 2:
                price = 1322.18
                departureHour = '08:25'
                returnHour = '12:35'
                company = 'Gol'
                break
            case 3:
                price = 1126.49
                departureHour = '18:30'
                returnHour = '22:15'
                company = 'LATAM'
                break
        }

        const bodyRequest = {
              price: price
            , company: company
            , whereFrom: whereFrom
            , cityFrom: 'Origem'
            , whereTo: whereTo
            , cityTo: 'Destino'
            , roundTrip: true
            , howManyPeople: 1
            , departureDate: departureDate
            , departureHour: departureHour
            , returnDate: returnDate
            , returnHour: returnHour
            , passengers: [
            {
                  name: name
                , cpf: cpf
                , birthDate: birthDate
                , phone: phone
                , seatGoing: seatGoing
                , seatReturn: seatReturn
            }
        ]
        }

        const APIResponse = await reservation(bodyRequest)
        const flightCode = APIResponse.data.flightCode

        const response = {
            fulfillmentText: [
                  `Por favor anote o código ${flightCode}.\n`
                + 'Futuramente você irá utiliza-lo para fazer checkin e consultas.\n\n'
                + 'No que mais posso ajudar ?'
            ]
        }

        res.send(response)
    } catch (error) {
        const errorMsg = {
            fulfillmentText: [
                  'Erro ao tentar reservar as passagens:\n'
                + error.response.data.message
            ]
        }

        res.send(errorMsg)
    }
}

const preCheckinIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            'Por favor informe o código do voo, seu nome completo e seu CPF (com pontuação) para realizar o checkin de suas passagens.'
        ]
    }

    res.send(response)
}

const checkinIntent = async (req, res) => {
    try {
        const flightCode    = req.body.queryResult.outputContexts[0].parameters.flightCode
            , name          = req.body.queryResult.outputContexts[0].parameters.person.name
            , cpf           = req.body.queryResult.outputContexts[0].parameters.cpf

        const bodyRequest = {
              flightCode: flightCode
            , name: name
            , cpf: cpf
        }

        const APIResponse = await checkin(bodyRequest)
        const checkinCode = APIResponse.data.checkinCode

        const response = {
            fulfillmentText: [
                  `Seu código de checkin é ${checkinCode}, guarde ele com cuidado.\n\n`
                + 'Ainda posso te ajudar em mais alguma coisa ?'
            ]
        }

        res.send(response)
    } catch (error) {
        const errorMsg = {
            fulfillmentText: [
                'Erro ao realizar checkin:\n'
                + error.response.data.message
            ]
        }

        res.send(errorMsg)
    }
}

const preStatusIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            'Por favor informe o código do voo e seu CPF (com pontuação) para buscar o status de sua passagem.'
        ]
    }

    res.send(response)
}

const statusIntent = async (req, res) => {
    try {
        console.log('entrou')
        const flightCode    = req.body.queryResult.outputContexts[0].parameters.flightCode
            , cpf           = req.body.queryResult.outputContexts[0].parameters.cpf

        const bodyRequest = {
              flightCode: flightCode
            , cpf: cpf
        }

        const APIResponse = await status(bodyRequest)
        const data = APIResponse.data

        const response = {
            fulfillmentText: [
                  `Voo de ${data.whereFrom} para ${data.whereTo} marcado para o dia ${data.departureDate} as ${data.departureHour}, poltrona ${data.seatGoing}.\n`
                + `Volta marcada para o dia ${data.returnDate} as ${data.returnHour}, poltrona ${data.seatReturn}\n`
                + `Código do checkin: ${data.checkinCode}\n\n`
                + 'Posso ajudar em mais alguma coisa ?'
            ]
        }
        console.log(APIResponse)

        res.send(response)
    } catch (error) {
        const errorMsg = {
            fulfillmentText: [
                'Erro ao buscar o status da passagem:\n'
                + error.response.data.message
            ]
        }

        res.send(errorMsg)
    }
}

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    switchIntent(req, res, intent)
}

module.exports = {
    main
}