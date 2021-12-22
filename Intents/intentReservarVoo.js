const fetch = require('cross-fetch');
const dadosBuscaVoo = require('./intentBuscarVoo');
const {dadosBuscarVoo, dadosVooEscolhido} = require('./intentBuscarVoo');
let dadosTodos = {
    passengers: []
};
let dadosPassageiro = {};
module.exports = {
    dadosTodos,
    dadosPassageiro,
    inicioReservarVoo() {
        return `Informe o nome completo do 1º passageiro`
    },
    naoCadastro() {
        return `Informe o nome completo do 1º passageiro`
    },
    nomePassageiro(parametros) {
        this.dadosPassageiro.name = parametros.nome.name;
        return `Informe o cpf do passageiro`;
    },
    cpfPassageiro(parametros) {
        this.dadosPassageiro.cpf = parametros.cpf;
        return `Informe o telefone do passageiro`;
    },
    telefonePassageiro(parametros) {
        this.dadosPassageiro.phone = parametros.telefone;
        return `Informe a data de nascimento do passageiro`;
    },
    dataNascimentoPassageiro(parametros) {
        this.dadosPassageiro.birthDate = parametros.dataNasc.slice(0,-15);
        return this.listarAssentosDisponiveisIda() + `\nEscolha um assento`;
    },
    assentoIda(parametros) {
        this.dadosPassageiro.seatGoing = parametros.assentoIda;
        return `Adicionar Assento de volta ?`
    },
    simVolta() {
        return this.listarAssentosDisponiveisVolta() +`\nEscolha um assento`;
    },
    async naoVolta() {
        this.dadosTodos.passengers.push(this.dadosPassageiro);
        this.dadosPassageiro = {};
        const assentosIda = this.listarAssentosIdaEscolhidos();
        if(dadosTodos.passengers.length === dadosBuscaVoo.dadosVooEscolhido.howManyPeople){
            const codigoVoo = await this.fazerReserva();
            return `Código de Voo: ${codigoVoo},
            \nNome Comprador: ${dadosTodos.passengers[0].name}
            \nCPF Comprador: ${dadosTodos.passengers[0].cpf}
            \nAssentosIda: ${assentosIda}
            \nCaso queira comprar as passagens digite "Comprar"\n Digite "Cancelar" Caso queira cancelar reserva`;
        
        }else{
            return `Informe o nome do próximo Passageiro`
        }    
    },
    async assentoVolta(parametros) {
        this.dadosPassageiro.seatReturn = parametros.assentoVolta;
        this.dadosTodos.passengers.push(this.dadosPassageiro);
        this.dadosPassageiro = {};
        const assentosIda = this.listarAssentosIdaEscolhidos();
        const assentosVolta = this.listarAssentosVoltaEscolhidos();
        console.log(dadosTodos.passengers.length + " e "+ dadosBuscaVoo.dadosVooEscolhido.howManyPeople)
        if(dadosTodos.passengers.length === dadosBuscaVoo.dadosVooEscolhido.howManyPeople){
            const codigoVoo = await this.fazerReserva();
        return `Código de Voo: ${codigoVoo},
        \nNome Comprador: ${dadosTodos.passengers[0].name}
        \nCPF Comprador: ${dadosTodos.passengers[0].cpf}
        \nAssentosIda: ${assentosIda}
        \nAssentosVolta: ${assentosVolta}
        \nCaso queira comprar as passagens digite "Comprar"\n Digite "Cancelar" Caso queira cancelar reserva`;
        
        }else{
            return `Informe o nome do próximo Passageiro`   
        }
        
    },
    listarAssentosDisponiveisIda() {
        let mensagem = "";
        for (const key in dadosBuscaVoo.dadosVooEscolhido.freeSeatsGoing) {
            mensagem += `${dadosBuscaVoo.dadosVooEscolhido.freeSeatsGoing[key]}, `;
        }
        return mensagem;
    },
    listarAssentosDisponiveisVolta() {
        let mensagem = "";
        for (const key in dadosBuscaVoo.dadosVooEscolhido.freeSeatsReturn) {
            mensagem += ` ${dadosBuscaVoo.dadosVooEscolhido.freeSeatsReturn[key]},`;
        }
        return mensagem;
    },
    listarAssentosIdaEscolhidos(){
        let mensagemAssentosIda = "";
        const ArrayPassageiros = this.dadosTodos.passengers;
        for (const objeto of ArrayPassageiros) {
            for (const valor in objeto) {
                if(valor === 'seatGoing'){
                    mensagemAssentosIda += ` ${objeto[valor]},`;
                }    
                
            }
        }
    return mensagemAssentosIda;
    },
    listarAssentosVoltaEscolhidos(){
        let mensagemAssentosVolta = "";
        const ArrayPassageiros = this.dadosTodos.passengers;
        for (const objeto of ArrayPassageiros) {
            for (const valor in objeto) {
                if(valor === 'seatReturn'){
                    mensagemAssentosVolta += ` ${objeto[valor]},`;
                }    
                
            }
        }
    return mensagemAssentosVolta;
    },
    async fazerReserva() {
        let dadosBody = dadosBuscaVoo.dadosVooEscolhido;
        delete dadosBody.freeSeatsGoing;
        delete dadosBody.freeSeatsReturn;
        dadosBody.passengers = this.dadosTodos.passengers;
        console.log("dadosBody");
        console.log(dadosBody);
        try {
            const resposta = await fetch(`https://101d-2804-3b1c-110-f601-b942-71b5-6862-4391.ngrok.io/api/externa/reservation/`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosBody)
            });
            data = await resposta.json();
            return data.flightCode;
        } catch (erro) {
            console.log(erro);
            return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
        }

    },

}