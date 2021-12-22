const Passageiro = require('../models/passageiroModel');
const voosService = require('../service/voosService')

function cumprimentar(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Olá, eu sou o ChatBot da Compasso Voos, é um prazer falar com você, em que posso ajudar?\nPara começar, digite "Ajuda"`,
                ]
            }
        }]
    })
}

function ajudarUsuario(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Você pode me pedir para realizar a reserva de uma passagem, realizar o check in, ver o status da sua passagem\nE também pode me perguntar quem sou eu`
                ]
            }
        }]
    })
}

function descreverBot(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Eu sou o ChatBot da Compasso Voos, eu te ajudo a reservar uma passagem, realizar o checkin e verficar o status também',
                ]
            }
        }]
    })
}

function checkIn(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Informe o seu CPF e o código do voo',
                ]
            }
        }]
    })
}

function reservarPassagem(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Informe seu CPF',
                ]
            }
        }]
    })
}

function statusPassagem(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Informe o seu CPF e o código código do voo',
                ]
            }
        }]
    })
}

function despedida(req, res) {
    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    'Até logo, espero ter conseguido te ajudar',
                ]
            }
        }]
    })
}

async function consultarCpf(req, res) {
    const passageiroCpf = req.body.queryResult.parameters.CPF;

    if (!passageiroCpf) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe o cpf`
                    ]
                }
            }]
        })
    }

    const passageiro = await Passageiro.findOne({
        cpf: passageiroCpf
    })

    if (!passageiro) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Cadastro não encontrado, deseja realizar o cadastro?`
                    ]
                }
            }]
        })
    }

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `Cadastro encontrado:\n${passageiro.nome}\n${passageiro.cpf}\n${passageiro.dataNascimento}`
                ]
            }
        }]
    })
}

async function consultarStatus(req, res) {
    const cpf = req.body.queryResult.parameters.CPF;
    const passagem = req.body.queryResult.parameters.passagem;


    if (!cpf) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe o cpf`
                    ]
                }
            }]
        })
    }
    if (!passagem) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe o codigo do voo`
                    ]
                }
            }]
        })
    }

    const status = await voosService.statusDaPassagem(cpf, passagem);

    console.log(status)

    if (status['data']) {
        let idaEvolta = status.data.roundTrip ? 'Sim' : 'Não';
        let statusCheckin = status.data.doneCheckin ? 'Realizado' : 'Não realizado';
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Status da passagem:\nValor: ${status.data.price}\nCompanhia: ${status.data.company}\nOrigem: ${status.data.whereFrom}\nCidade Origem: ${status.data.cityFrom}\nDestino: ${status.data.whereTo}\nCidade Destino: ${status.data.cityTo}\nData Embarque: ${status.data.departureDate}\nHora Embarque: ${status.data.departureHour}\nData Volta: ${status.data.returnDate}\nHora Volta: ${status.data.returnHour}\nIda e volta: ${idaEvolta}\nCheckin: ${statusCheckin}\nCódigo Checkin: ${status.data.checkinCode}\nNome: ${status.data.name}\nAssento Ida: ${status.data.seatGoing}\nAssento Retorno: ${status.data.seatReturn}`
                    ]
                }
            }]
        })
    }

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `${status.message}`
                ]
            }
        }]
    })
}

async function consultarCheckIn(req, res) {
    const cpf = req.body.queryResult.parameters.CPF;
    const passagem = req.body.queryResult.parameters.passagem;
    const objetoData = 'data';

    if (!cpf) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe o cpf`
                    ]
                }
            }]
        })
    }
    if (!passagem) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe o codigo do voo`
                    ]
                }
            }]
        })
    }

    const checkIn = await voosService.checkIn(cpf, passagem);

    if (checkIn[objetoData]) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Código de CheckIn ${checkIn.data.checkinCode}`
                    ]
                }
            }]
        })
    }

    return res.send({
        "fulfillmentMessages": [{
            "text": {
                "text": [
                    `${checkIn.message}`
                ]
            }
        }]
    })
}

function consultarCpfFollowUpSim(req, res) {
    return res.send({
        "followupEventInput": {
            "name": "cadastrarEvent",
            "parameters": {
                "CPF": req.body.queryResult.outputContexts[1].parameters.CPF,
            },
            "languageCode": "pt-BR"
        }
    })
}

async function cadastrar(req, res) {
    let nome, dataNascimento, telefone

    const cpf = req.body.queryResult.outputContexts[1].parameters.CPF;

    console.log(req.body.queryResult);

    if (!req.body.queryResult.parameters.nome) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe seu nome`
                    ]
                }
            }]
        })
    }

    if (!req.body.queryResult.parameters.nascimento) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Qual a data do seu nascimento`
                    ]
                }
            }]
        })
    }

    if (!req.body.queryResult.parameters.telefone) {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Informe seu telefone`
                    ]
                }
            }]
        })
    }
    nome = req.body.queryResult.outputContexts[1].parameters.nome.name;
    dataNascimento = req.body.queryResult.outputContexts[1].parameters.nascimento;
    telefone = req.body.queryResult.outputContexts[1].parameters.telefone;

    const passageiroCadastro = {
        nome,
        cpf,
        dataNascimento,
        telefone
    }

    try {
        await Passageiro.create(passageiroCadastro)
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `${nome}, casdastro realizado\nSolicite a reserva novamente`
                    ]
                }
            }]
        })

    } catch {
        return res.send({
            "fulfillmentMessages": [{
                "text": {
                    "text": [
                        `Erro no servidor, cadastro não realizado`
                    ]
                }
            }]
        })
    }
}

module.exports = {
    cumprimentar,
    ajudarUsuario,
    descreverBot,
    checkIn,
    reservarPassagem,
    statusPassagem,
    despedida,
    consultarCpf,
    consultarStatus,
    consultarCheckIn,
    consultarCpfFollowUpSim,
    cadastrar
}