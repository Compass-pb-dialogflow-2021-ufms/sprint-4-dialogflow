const fetch = require('cross-fetch');
let dadosBuscarVoo = {};
let dadosVooEscolhido = {};
module.exports = {
    dadosBuscarVoo,
    dadosVooEscolhido : {
        price: 1252.23,
        company: "Azul",
        whereFrom: "POA",
        cityFrom: "Porto Alegre",
        whereTo: "FOR",
        cityTo: "Fortaleza",
        roundTrip: true,
        howManyPeople: 2,
        departureDate: "2021-12-23",
        departureHour: "12:35",
        returnDate: "2021-12-27",
        returnHour: "18:35",
        freeSeatsGoing: [
          "1A"
        ],
        freeSeatsReturn: [
          "1A"
        ]
      },
    inicioBuscarVoo() {
        return `Informe local de origem
        \nEXEMPLO: Porto Alegre`;
    },
    buscarVooOrigemFallback() {
        return `Desculpa não compreendi, repita o local de origem`;
    },
    origem(parametros) {
        this.dadosBuscarVoo.origem = parametros.origem;
        return `Informe local de destino`
    },
    buscarVooDestinoFallback() {
        return `Desculpa não compreendi, repita o local de destino`
    },
    destino(parametros) {
        this.dadosBuscarVoo.destino = parametros.destino;
        return `Informe a quantidade de assentos`
    },
    buscarVooQtdPassagensFallback() {
        return `Desculpa não compreendi, repita a quantidade de passagens`
    },
    buscarVooDataIdaFallback() {
        return `Desculpa não compreendi, repita a data de ida`
    },
    dataIda(parametros) {
        this.dadosBuscarVoo.dataIda = parametros.dataIda.slice(0,-15);
        return `Deseja adicionar passagem de volta`;
    },
    simVolta() {
        return `Informe a data de volta`;
    },
    naoVolta() {
        dadosBuscarVoo.roundTrip = false;
        return this.voosAchados() + `\nCaso deseje reservar assento digite "Reservar"\nCaso queira cancelar Digite "cancelar"`;
    },
    dataVolta(parametros) {
        this.dadosBuscarVoo.dataVolta = parametros.dataVolta.slice(0,-15);
        dadosBuscarVoo.roundTrip = true;
        return this.voosAchados() + `\nCaso deseje reservar assento digite "Reservar"\nCaso queira cancelar Digite "cancelar"`;

    },
    buscarVooDataVoltaFallback() {
        return `Desculpa, não compreendi\nInforme novamente a data de retorno`
    },
    qtdAssentos(parametros) {
        this.dadosBuscarVoo.qtdPassagem = parametros.qtdPassagem;
        return `Informe a data de ida`;
    },
    buscarVoo2() {
        
        /*
        if (dadosBuscarVoo.roundTrip) {
            this.dadosVooEscolhido = {
                price: 1252.23,
                company: "Azul",
                whereFrom: `${dadosBuscarVoo.origem}`,
                cityFrom: `${dadosBuscarVoo.origem}`,
                whereTo: `${dadosBuscarVoo.destino}`,
                cityTo: `${dadosBuscarVoo.destino}`,
                roundTrip: true,
                howManyPeople: dadosBuscarVoo.qtdPassagem,
                departureDate: `${dadosBuscarVoo.dataIda}`,
                departureHour: "12:35",
                returnDate: `${dadosBuscarVoo.dataVolta}`,
                returnHour: "18:35",
                freeSeatsGoing: [
                    "1A", "2A", "5B", "4C", "4L"
                ],
                "freeSeatsReturn": [
                    "7E", "1A", "2A", "5B", "4C", "4L"
                ]
            }
        } else {
            this.dadosVooEscolhido = {
                price: 1252.23,
                company: "Azul",
                whereFrom: `${dadosBuscarVoo.origem}`,
                cityFrom: `${dadosBuscarVoo.origem}`,
                whereTo: `${dadosBuscarVoo.destino}`,
                cityTo: `${dadosBuscarVoo.destino}`,
                roundTrip: false,
                howManyPeople: dadosBuscarVoo.qtdPassagem,
                departureDate: `${dadosBuscarVoo.dataIda}`,
                departureHour: "12:35",
                freeSeatsGoing: [
                    "1A", "2A", "5B", "4C", "4L"
                ],
                "freeSeatsReturn": [
                    "10E", "1A", "2A", "5B", "4C", "4L"
                ]
            }
        }

        return `Digite "Reserva" caso queira reservar a passagem
                \nDigite menu caso queira acessar outros servicos`;*/
    },
    voosAchados() {
        this.buscarVoo2();
        let mensagemBusca;
        if (dadosBuscarVoo.roundTrip) {
            mensagemBusca =
                `
                    Preço: 1252.23,
                    \nCompanhia: Azul,
                    \nOrigem: ${dadosBuscarVoo.origem},
                    \nDestino: ${dadosBuscarVoo.destino},
                    \nAssentos Livres: ${dadosBuscarVoo.qtdPassagem},
                    \nData Saída : ${dadosBuscarVoo.dataIda},
                    \nHorário Saída: "12:35",
                    \nData Retorno: ${dadosBuscarVoo.dataVolta},
                    \nHorário Retorno: "18:35",
                    \nAssentos Livre Ida: "1A", "2A", "5B", "4C", "4L",
                    \n Assentos Livre Retorno: "10E", "1A", "2A", "5B", "4C", "4L"
                `
        } else {
            mensagemBusca = 
                `
                    Preço: 1252.23,
                    \nCompanhia: Azul,
                    \nOrigem: ${dadosBuscarVoo.origem},
                    \nDestino: ${dadosBuscarVoo.destino},
                    \nAssentos Livres: ${dadosBuscarVoo.qtdPassagem},
                    \nData Saída : ${dadosBuscarVoo.dataIda},
                    \nHorário Saída: "12:35",
                    \nAssentos Livre Ida: "1A", "2A", "5B", "4C", "4L",
                `
        }
        return mensagemBusca;    
    }
    
}