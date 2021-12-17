const moedaService = require('../services/moedasService');
const formatter = require('../utils/formatarNumero')

function bemVindo(req, res) {
    res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Olá, eu sou o bot de cotação monetária\nDiga iniciar para eu te apresentar as opções',
                ]
            }
        }]
    })
}

function ajudarUsuario(req, res) {
    res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Você pode me perguntar qual a cotação das seguintes moedas:\nReal Brasileiro\nDolar Americano\nEuro\nIene\nBitcoin\nExemplo: "Qual a cotação do Dolar em Real?"\nPosso listar a cotação do real em todas as moedas descritas acima\nAlém disso, eu consigo realizar a conversão entre essas moedas\nExemplo: "Quanto vale 5 dolares em reais?"'
                ]
            }
        }]
    })
}

async function cotar(req, res) {
    const moedas = req.body.queryResult.parameters.moedas;
    let resultado;
    let simboloMoeda;

    if (moedas.length > 1 && moedas[0] !== moedas[1] && moedas[1] != 'BTC') {
        const cotacao = await moedaService.consultarCotacao(moedas.join("-"));

        simboloMoeda = moedas[1];
        switch (simboloMoeda) {
            case 'BRL':
                simboloMoeda = 'R$';
                break;
            case 'USD':
                simboloMoeda = '$';
                break;
            case 'EUR':
                simboloMoeda = '€';
                break;
            case 'JPY':
                simboloMoeda = '¥';
                break;
            default:
                break;
        }

        resultado = {
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `A cotação da moeda ${moedas[0]} em relação a moeda ${moedas[1]} é ${simboloMoeda} ${formatter(cotacao[moedas.join('')].bid)}`
                    ]
                }
            }]
        };
    } else if (moedas[1] != 'BTC') {
        const cotacao = await moedaService.consultarCotacao("BRL-USD,BRL-EUR,BRL-JPY");

        if (moedas[0] === 'BRL' || moedas.length == 0) {
            resultado = {
                "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `A cotação do real: \r\n
                            BRL/USD = $ ${cotacao.BRLUSD.high}\n
                            BRL/EUR = € ${cotacao.BRLEUR.high}\n
                            BRL/JPY = ¥ ${cotacao.BRLJPY.high}\n
                            `
                        ]
                    }
                }]
            };
        } else {
            resultado = {
                "fulfillmentMessages": [{
                    "text": {
                        "text": [
                            `Não possuo a lista de cotação monetária para essa moeda por enquanto, somente a do Real\nVocê pode me perguntar por exemplo: "Qual a cotação do Euro em Dolar?"\nPode me pedir ajuda, caso precisar`
                        ]
                    }
                }]
            };
        }

    } else {
        resultado = {
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Não consigo te mostrar essa cotação\nVocê pode me perguntar por exemplo: "Qual a cotação do Euro em Dolar?"\nPode me pedir ajuda, caso precisar`
                    ]
                }
            }]
        };
    }

    res.send(resultado);
}

async function converter(req, res) {
    const moedas = req.body.queryResult.parameters.moedas;
    let resultado;

    if (!moedas || moedas.length == 0 || moedas.length % 2 != 0 || moedas.length > 2) {
        resultado = ({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Por favor, para realizar a conversão monetária me informe duas moedas e a quantidade que deseja converter\nQualquer coisa é só me pedir ajuda`
                    ]
                }
            }]
        })
    } else if (moedas[0] != 'BTC' && moedas[1] != 'BTC') {
        const moeda1 = moedas.join('');
        const moeda2 = moedas[1] + moedas[0];
        const moedasParam = moedas.join('-');
        const moedasInvertParam = moedas[1] + "-" + moedas[0];
        const paramentroConverterMoeda = moedasParam.toString() + "," + moedasInvertParam;
        const quantidade = req.body.queryResult.parameters.quantidade;

        const converter = await moedaService.consultarCotacao(paramentroConverterMoeda);

        resultado = ({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `${quantidade} ${moedas[0]} = ${formatter(converter[moeda1].bid * quantidade)} ${moedas[1]}\n${quantidade} ${moedas[1]} = ${formatter(converter[moeda2].bid * quantidade)} ${moedas[0]}`
                    ]
                }
            }]
        });
    } else if (moedas[0] == 'BTC' && moedas[1] != 'JPY') {
        const parametroMoeda = moedas.join('-');
        const objetoMoeda = moedas.join('');
        const quantidade = req.body.queryResult.parameters.quantidade;

        const converter = await moedaService.consultarCotacao(parametroMoeda);

        resultado = ({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `${quantidade} ${moedas[0]} = ${formatter(converter[objetoMoeda].bid * quantidade)} ${moedas[1]}`
                    ]
                }
            }]
        })
    } else {
        resultado = ({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Desculpe, mas não consigo realizar essa conversão\nDigite "ajuda"`
                    ]
                }
            }]
        })
    }
    res.send(resultado);
}

module.exports = {
    cotar,
    converter,
    bemVindo,
    ajudarUsuario
}