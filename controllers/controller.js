const cotacaoApi = require('../api/cotacao');

module.exports = function (req, res) {
    const reqIntent = req.body.queryResult.intent.displayName;

    switch (reqIntent) {
        case 'Cotacao':
            cotacaoApi.cotar(req, res);
            break;
        case 'ConverterMoeda':
            cotacaoApi.converter(req, res);
            break;
        case 'saudacao':
            cotacaoApi.bemVindo(req, res);
            break;
        case 'ajuda':
            cotacaoApi.ajudarUsuario(req, res);
            break;
        default:
            res.send({
                "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Lamento, mas não compreendi\nDigite "ajuda", por favor`
                        ]
                    }
                }]
            });
            break;
    }
}