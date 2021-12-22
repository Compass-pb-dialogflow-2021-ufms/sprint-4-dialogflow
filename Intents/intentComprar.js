const dadosBuscaVoo = require('./intentBuscarVoo');
let dadosCartao;
module.exports ={
    inicioCompraPassagem(){
        return `Valor Total: $${dadosBuscaVoo.dadosVooEscolhido.Price}\nQual a forma de pagamento "Boleto" ou "Cartão"?`
    },
    boleto(){
        
        return `Deseja Finalizar compra ?\nSe sim digite "Sim"\nSe não digite "Não"`;
    },
    simFinalizar(){
        return `Muito obrigado por comprar\n Digite checkin para realizar ele`
    },
    naoFinalizar(){
        return `Uma pena, qualquer coisa estamos a disposição\nDigite menu para ver meus serviços`
    },
    cartao(){
        return `Informe o número do seu Cartão`;
    },
    numeroCartao(parametros){
        this.dadosCartao = {numCartao : `${parametros.numCartao}`};
        return `Informe o código de segurança do seu cartão`
    },
    cvvCartao(parametros){
        this.dadosCartao.cvv = parametros.cvv;
        return `Informe se vai pagar no credito ou débito`
    },
    modoPagamento(parametros){
        this.dadosCartao.modo = parametros.modo;
        return `Deseja Finalizar compra ?\nSe sim digite "Sim"\nSe não digite "Não"`;
        
    }
}