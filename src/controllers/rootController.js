const { search, reservation, checkin, status } = require('../API/connection')

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
            'E para finalizar qual a data para a volta ?'
        ]
    }

    res.send(response)
}

const returnDateIntent = (req, res) => {
    console.log(req.body.queryResult.outputContexts)
    const whereFrom     = req.body.queryResult.outputContexts[0].parameters.whereFrom
        , whereTo       = req.body.queryResult.outputContexts[0].parameters.whereTo
        , departureDate = (req.body.queryResult.outputContexts[0].parameters.departureDate).split('T')[0]
        , returnDate    = (req.body.queryResult.outputContexts[0].parameters.returnDate).split('T')[0]

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
            + '[OPÇÂO 3]'
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

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    switchIntent(req, res, intent)
}

module.exports = {
    main
}