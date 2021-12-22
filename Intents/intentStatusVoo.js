const fetch = require('cross-fetch');
let dadosStatus;
module.exports = {
    inicioStatusVoo() {
        return `Informe o codigo de voo`;
    },
    codigoVoo(parametros) {
        this.dadosStatus = {
            flightCode: `${parametros.codVoo}`
        };
        console.log(this.dadosStatus);
        return `Informe o cpf cadastrado`;
    },
    async cpfStatus(parametros) {
        this.dadosStatus.cpf = `${parametros.cpf}`;
        let mensagemStatus = await this.mensagemStatus();
        return mensagemStatus;
    },
    async mensagemStatus() {
        let dados = await this.statusVoo();
        if (dados.price === undefined) {
            return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
        } else {
            return `
            Preço: ${dados.price},
            Companhia: ${dados.company},
            Origem: ${dados.whereFrom},
            Cidade Origem: ${dados.cityFrom},
            Destino: ${dados.whereTo},
            Cidade Destino: ${dados.cityTo},
            "Data Ida": ${dados.departureDate},
            "Horário Ida": ${dados.departureHour},
            "Data Retorno": ${dados.returnDate},
            "Horário Retorno": ${dados.returnHour},
            "Código Check-in": ${dados.checkinCode},
            "Nome": ${dados.name},
            "Assento Ida": ${dados.seatGoing},
            "Assento Retorno": ${dados.seatReturn},
        `
        }
    },
    async statusVoo() {
        try {
            const resposta = await fetch(`https://8905-45-6-110-101.ngrok.io/api/externa/status/`, {
                method: "post",
                body: JSON.stringify(this.dadosStatus),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            data = await resposta.json();
            return data;
        } catch (erro) {
            console.log(erro);
            return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
        }
    }
}