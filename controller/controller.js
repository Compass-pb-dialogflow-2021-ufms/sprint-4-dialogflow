const apiVoos = require('../api/apiVoos');

module.exports = function (req, res) {
    const reqIntent = req.body.queryResult.intent.displayName;

    switch (reqIntent) {
        case 'Saudacao':
            return apiVoos.cumprimentar(req, res);
        case 'Ajuda':
            return apiVoos.ajudarUsuario(req, res);
        case 'SobreMim':
            return apiVoos.descreverBot(req, res);
        case 'CheckIn':
            return apiVoos.checkIn(req, res);
        case 'ReservarPassagem':
            return apiVoos.reservarPassagem(req, res);
        case 'StatusPassagem':
            return apiVoos.statusPassagem(req, res);
        case 'Despedida':
            return apiVoos.despedida(req, res);
        case 'ConsultarCpf':
            return apiVoos.consultarCpf(req, res);
        case 'ConferirStatus':
            return apiVoos.consultarStatus(req, res);
        case 'ConferirCheckIn':
            return apiVoos.consultarCheckIn(req, res);
        case 'ConsultarCpfYesFollowUp':
            return apiVoos.consultarCpfFollowUpSim(req, res);
        case 'CadastroPassageiro':
            return apiVoos.cadastrar(req, res);
        case 'Default Fallback Intent':
            return res.send({
                "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Lamento, mas não compreendi\nDigite "ajuda", por favor`
                        ]
                    }
                }]
            });
        default:
    }
}