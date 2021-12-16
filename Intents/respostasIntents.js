const fetch = require('cross-fetch');
const moment = require('moment');
let dadosConversao = {};
module.exports = {
  fallback() {
    return `Desculpe, mas não compreendi`
  },
  async saudacaoUsuario(req) {

    if (req.body.originalDetectIntentRequest.payload.data === undefined) {
      return `Olá, estou aqui para te ajudar com a cotação monetária\nDigite "Menu" para ver meus serviços`
    } else {
      try {
        const dados = req.body.originalDetectIntentRequest.payload.data;
        const id = dados.from.id;
        const resposta = await fetch(`https://c22c-45-237-255-214.ngrok.io/api/bd/${id}`);
        const data = await resposta.json();
        if (data === null) {
          await fetch(`https://c22c-45-237-255-214.ngrok.io/api/bd/adicionar`, {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              primeiroNome: dados.from.first_name,
              idUsuario: dados.from.id
            })
          });
          return `Olá ${req.body.originalDetectIntentRequest.payload.data.from.first_name} estou aqui para te ajudar com a cotação monetária\nDigite "Menu" para ver meus serviços`
        } else {
          return `Olá novamente ${req.body.originalDetectIntentRequest.payload.data.from.first_name}, estou aqui para te ajudar com a cotação monetária\nDigite "Menu" para ver meus serviços`
        }
      } catch (erro) {
        console.error(erro);
      }
    }
  },
  menu() {
    return `menu:
    \n-Cotação do Real nas moedas disponiveis\n-Conversão Monetária\n---  --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    moedas disponiveis:\nBRL: Real Brasileiro\nUSD: Dolar americano\nEUR: Euro\nBTC: Bitcoin\nJPY: Iene Japones`
  },
  async cotacaoReal() {
    let data = {};
    try {
      const resposta = await fetch(`https://c22c-45-237-255-214.ngrok.io/api/externa`);
      data = await resposta.json();
    } catch (error) {
      console.log(erro);
      return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
    }
    return `${data.USDBRL.name}\n O Real esta valendo US$ ${(data.USDBRL.bid * 1).toFixed(2)}\nUltima Atualização: ${this.timestampParaData(data.USDBRL.timestamp)}
          \n${data.EURBRL.name}\n O Real esta valendo € ${(data.EURBRL.bid *1).toFixed(2)}\nUltima Atualização: ${this.timestampParaData(data.EURBRL.timestamp)}
          \n${data.BTCBRL.name}\n O Real esta valendo ₿ ${(data.BTCBRL.bid*1).toFixed(2)}\nUltima Atualização: ${this.timestampParaData(data.BTCBRL.timestamp)}
          \n${data.JPYBRL.name}\n O Real esta valendo ¥ ${(data.JPYBRL.bid*1).toFixed(2)}\nUltima Atualização: ${this.timestampParaData(data.JPYBRL.timestamp)}
          \nDigite "Menu" para ver meus serviços
          `
  },
  timestampParaData(timestamp) {
    return moment.unix(timestamp).format("D/M/YYYY H:mm:ss");
  },
  consversaoMonetaria(parametros) {
    if (parametros.moeda === '' && parametros.moeda2 === '' && parametros.valor === '') {
      return `Informe o valor e tambem informe de qual e para qual moeda o valor será convertido\n EXEMPLO : "10 dólar em reais"
      \n\nDevido a problemas no momento não estamos convertendo nenhuma moeda para Bitcoin(BTC)`;
    } else {
      Object.keys(parametros).forEach(conteudo => {
        if (parametros[conteudo] !== "") {
          dadosConversao[conteudo] = `${parametros[conteudo]}`;
        }
      })

      if (dadosConversao.moeda === undefined) {
        return `Informe de qual moeda o valor será convertido`;
      } else if (dadosConversao.moeda2 === undefined) {
        return `Informe para qual moeda o valor será convertido
        \n\nDevido a problemas no momento não estamos convertendo nenhuma moeda para Bitcoin(BTC)`;
      } else if (dadosConversao.valor === undefined) {
        return `Informe qual valor será convertido`;
      } else {
        return this.dadosConversaoMonetaria(dadosConversao).then(dadosConversao = {});

      }
    }
  },
  async dadosConversaoMonetaria(dadosConversao) {
    const valor = dadosConversao.valor;
    const moeda = dadosConversao.moeda;
    const moeda2 = dadosConversao.moeda2;
    const codigo = moeda + moeda2;
    let data = {};
    try {
      const resposta = await fetch(`https://c22c-45-237-255-214.ngrok.io/api/externa/conversao/?moeda=${moeda}&moeda2=${moeda2}`);
      data = await resposta.json();
      return `${data[codigo].name}\n${valor} ${moeda} = ${(valor * data[codigo].bid).toFixed(2)} ${moeda2}\nUltima atualização da cotação: ${this.timestampParaData(data[codigo].timestamp)}
      \nDigite "Menu" para ver meus serviços`;
    } catch (erro) {
      console.log(erro);
      return `Desculpa aconteceu um erro, tente novamente mais tarde\nDigite "Menu" para ver meus serviços`;
    }
  }



}