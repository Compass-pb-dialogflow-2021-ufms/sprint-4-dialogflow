const usuariosController = require('./usuariosController')

const catchText = {
    fulfillmentText: [
        'Oh não, parece que um de nossos serviços está fora do ar !!!\n'
        + 'Por favor tente novamente mais tarde.'
    ]
}

const switchIntent = (req, res, intent, userId) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res, userId)
            break
        case 'Default Fallback Intent':
            defaultFallbackIntent(req, res)
            break
        case 'Ajuda Intent':
            ajudaIntent(req, res)
            break
        case 'Cotação Intent':
            cotacaoIntent(req, res)
            break
        case 'Conversão Intent':
            conversaoIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = async (req, res, userId) => {
    try {
        let response;
        const userNome = req.body.queryResult.parameters.usuario.name

        if (usuariosController.getVerificado()) {
            response = {
                fulfillmentText: `Bem-vindo(a) ${usuariosController.getNome()}, como posso te ajudar hoje ?`
            }
        } else if (userNome && userNome !== '') {
            response = {
                fulfillmentText: [
                    'Como é sua primeira vez utilizando o sistema vou me introduzir.\n\n'
                    + 'Sou o seu assistente pessoal para cotações e converções monetárias, posso te informar quanto o dólar está valendo hoje por exemplo.\n'
                    + 'Mas para verificar com mais detalhes todas minhas funções é so digitar ajuda ou pedir pelo menu.'
                ]
            }

            await usuariosController.inserirUsuario(userNome, userId)
        }else {
            response = {
                fulfillmentText: [
                    'Olá, estou aqui para te ajudar nas converções monetárias.\n\n'
                    + 'Mas antes me informe seu nome para que possamos conversar melhor.'
                ]
            }
        }

        res.send(response)
    } catch {
        res.send(catchText)
    }
}

const defaultFallbackIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            `Desculpe ${usuariosController.getNome()} mas eu não entendi.\n`
            + 'Se estiver com dificuldades é so digitar ajuda ou pedir pelo menu.'
        ]
    }

    res.send(response)
}

const ajudaIntent = (req, res) => {
    const response = {
        fulfillmentText: [
            `${usuariosController.getNome()} para te ajudar vou te explicar minhas funcionalidades.\n\n`
            + 'Cotação:\n'
            + 'Aqui eu respondo a cotação atual de algumas moedas (Dólar Americano, Euro, Iene e Bitcoin) que por padrão será em Reais.\n'
            + 'Mas também é possivel saber a cotação nessas outras moedas, basta pedir a conversão para a moeda que deseja.\n\n'
            + 'Conversão:\n'
            + 'Nessa função eu respondo o resultado do câmbio entre moedas (Real, Dólar Americano, Euro, Iene e Bitcoin).'
        ]
    }

    res.send(response)
}

const cotacaoIntent = (req, res) => {

}

const conversaoIntent = (req, res) => {

}

const main = async (req, res) => {
    try {
        const userId = req.body.originalDetectIntentRequest.payload.data.source.userId
        const intent = req.body.queryResult.intent.displayName

        await usuariosController.verificarUsuario(userId)
        if (usuariosController.getVerificado()) {
            switchIntent(req, res, intent, userId)
        } else {
            defaultWelcomeIntent(req, res, userId)
        }
    } catch {
        res.send(catchText)
    }
}

module.exports = {
    main
}