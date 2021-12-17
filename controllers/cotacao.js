// A ideia inicila era pegar as moedas inseridas pelo usuário e tratar diretamente na api, mas não consegui a tempo. Apesar disso obot exibe as cotações das moedas de forma estática. Também não consegui implementar a informação se usuário já utilizou o chatbot em algum momento anterior.

const axios = require("axios");
let dadosConversao = {};

let realParaDolar, realParaEuro, realParaYen;
let dolarParaReal, dolarParaEuro, dolarParaYen;
let euroParaReal, euroParaDolar, euroParaYen;
let yenParaReal, yenParaDolar, yenParaEuro;
let btcParaReal, btcParaDolar, btcParaEuro;
let horaCotacaoBtc,
  horaCotacaoReal,
  horaCotacaoEuro,
  horaCotacaoDolar,
  horaCotacaoYen;
// A api não retorna os valores BTC-moeda e também não retorna o valor de JPY-BTC (Yene para bitcoin)
axios
  .get(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,USD-EUR,USD-JPY,EUR-BRL,EUR-USD,EUR-JPY,BTC-BRL,BTC-EUR,BTC-USD,JPY-BRL,JPY-USD,JPY-EUR,BRL-USD,BRL-EUR,BRL-JPY"
  )
  .then((resp) => {
    //let info = JSON.parse(resp.data);

    //console.log(info);
    //realParaEuro = resp.data.BRLEUR.bid;
    realParaDolar = resp.data.BRLUSD.bid;
    realParaEuro = resp.data.BRLEUR.bid;
    realParaYen = resp.data.BRLJPY.bid;

    dolarParaReal = resp.data.USDBRL.bid * 1;
    dolarParaEuro = resp.data.USDEUR.bid * 1;
    dolarParaYen = resp.data.USDJPY.bid;

    euroParaReal = resp.data.EURBRL.bid;
    euroParaDolar = resp.data.EURUSD.bid;
    euroParaYen = resp.data.EURJPY.bid;

    yenParaReal = resp.data.JPYBRL.bid;
    yenParaDolar = resp.data.JPYUSD.bid;
    yenParaEuro = resp.data.JPYEUR.bid;

    btcParaReal = resp.data.BTCBRL.bid;
    btcParaDolar = resp.data.BTCUSD.bid;
    btcParaEuro = resp.data.BTCEUR.bid;

    horaCotacaoBtc = resp.data.BTCBRL.create_date;
    horaCotacaoDolar = resp.data.USDBRL.create_date;
    horaCotacaoEuro = resp.data.EURBRL.create_date;
    horaCotacaoReal = resp.data.BRLEUR.create_date;
    horaCotacaoYen = resp.data.JPYBRL.create_date;
  });

module.exports = {
  async welcome() {
    return `Olá, bem vindo ao QuotationBot! Nós temos a cotação das seguintes moedas: Real (R$) | Dólar (US$) | Euro (€) | Yene (¥) | Bitcoin. Digite, por exemplo, valor do Bitcoin.` ;
  },
  async fallback() {
    return "Desculpe, não entendi. Poderia repetir?";
  },

  async help() {
    return 'Você está na seção de ajuda. Temos as cotações da seguintes moedas: Real, Dólar, Yene, Euro e Bitcon.\nPara saber uma cotação específica, digite valor + o nome da moeda.\nPor exemplo: "Valor da Yene" (sem aspas)';
  },
  async cotacaoDolar() {
    return `Dólar atualmente está cotado em:\nR$ ${dolarParaReal} | € ${dolarParaEuro} | ¥ ${dolarParaYen} \n Última atualização: ${horaCotacaoDolar}`;
  },

  async cotacaoEuro() {
    return `O Euro atualmente está cotado em:\n
        R$ ${euroParaReal} | US$ ${euroParaDolar} | ¥ ${euroParaYen}\nÚltima atualização: ${horaCotacaoEuro}`;
  },

  async cotacaoYen() {
    return `O Yen atualmente está cotado em:\nR$ ${yenParaReal} | € ${yenParaEuro} | US$ ${yenParaDolar}\nÚltima atualização: ${horaCotacaoYen}`;
  },

  async cotacaoBitcoin() {
    return `O BITCOIN atualmente está cotado em:\nR$ ${btcParaReal} | € ${btcParaEuro} | US$ ${btcParaDolar}\nÚltima atualização: ${horaCotacaoBtc}`;
  },

  async cotacaoReal() {
    return `O Real atualmente está cotado em:\n¥ ${realParaYen} | € ${realParaEuro} | US$ ${realParaDolar}\nÚltima atualização: ${horaCotacaoReal}`;
  },
};
