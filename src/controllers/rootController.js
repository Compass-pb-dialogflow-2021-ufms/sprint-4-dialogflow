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

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    switchIntent(req, res, intent)
}

module.exports = {
    main
}