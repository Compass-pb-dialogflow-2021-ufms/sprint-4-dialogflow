const fetch = require('cross-fetch');
let dadosCheck;
module.exports = {
    inicioCheck() {
        return `Informe o codigo do Voo`;
    },
    codigoVoo(parametros) {
        this.dadosCheck = {codigoVoo :`${parametros.codigoVoo}`};
        return `Informe seu nome completo`;
    },
    nomeCheck(parametros) {
        this.dadosCheck.nome = parametros.nome.name;
        return `Informe seu cpf`;
    },
    async cpfCheck(parametros) {
        this.dadosCheck.cpf = parametros.cpf;
        const mensagemCheck = await this.checkIn();
        console.log(mensagemCheck.checkinCode);
        return `Seu código de check-in: ${mensagemCheck.checkinCode}\n Para olhar o status de Seu Voo digite "Status"`;
    },
    async checkIn() {
        let dadosBody = {
            flightCode: `${this.dadosCheck.codigoVoo}`,
            name: `${this.dadosCheck.nome}`,
            cpf: `${this.dadosCheck.cpf}`
        };
        try {
            const resposta = await fetch(`https://101d-2804-3b1c-110-f601-b942-71b5-6862-4391.ngrok.io/api/externa/checkin/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosBody)
            });
            let data = await resposta.json();
            return data;
        } catch (erro) {
            console.log(erro);
            return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
        }
    }
}