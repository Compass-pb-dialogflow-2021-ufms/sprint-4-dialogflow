const axios = require('axios')
const Usuario = require('../modelo/usuario')

const botDePedidos = async (req, res) => {
  var intentName = req.body.queryResult.intent.displayName;
  var resposta = false;
  var source = req.body.originalDetectIntentRequest.source;
  if(source == 'telegram'){
    const idTelegramHere = req.body.originalDetectIntentRequest.payload.data.from.id
    const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
    const usuario = new Usuario({idTelegram: idTelegramHere})
    const novoUsuario = await usuario.save()
    if(novoUsuario.idTelegram == idTelegramHere){
        resposta = true
        var novoNome = nome;
    }    
  }
  

  const apiResponse = await axios.get(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL`)
  const apiResponseConversionBR = await axios.get(`https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-JPY`)
  const apiResponseConversionUS = await axios.get(`https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-JPY`)
  const apiResponseConversionEU = await axios.get(`https://economia.awesomeapi.com.br/last/EUR-BRL,EUR-USD,EUR-JPY`)
  const apiResponseConversionJP = await axios.get(`https://economia.awesomeapi.com.br/last/JPY-BRL,JPY-USD,JPY-EUR`)
  const apiResponseConversionBIT = await axios.get(`https://economia.awesomeapi.com.br/last/BTC-BRL,BTC-USD,BTC-EUR`)
  const ultimasCotacoes = apiResponse.data
  const ultimasCotacoesBR = apiResponseConversionBR.data
  const ultimasCotacoesUS = apiResponseConversionUS.data
  const ultimasCotacoesEU = apiResponseConversionEU.data
  const ultimasCotacoesJP = apiResponseConversionJP.data
  const ultimasCotacoesBIT = apiResponseConversionBIT.data

  switch(intentName){
    case "Default Welcome Intent":
        if(resposta == false){
            res.json({ "fulfillmentText": "Olá, seja bem vindo ao Chatbot de Cotação Monetária!" + "\n" +
            "Aqui você pode converter qualquer moeda para outra, ex:(30 reais em dolar)" + "\n" + 
            "Se precisar de ajuda é so digitar ajuda aqui!"});
        }else{
            res.json({ "fulfillmentText": "Olá, " + novoNome + " seja bem vindo novamente ao Chatbot de Cotação Monetária!" + "\n" +
            "Aqui você pode converter qualquer moeda para outra, ex:(30 reais em dolar)" + "\n" + 
            "Se precisar de ajuda é so digitar ajuda aqui!"});
        }
            break;
    case "ajuda":
        res.json({ "fulfillmentText": "Temos 3 funcionalidades no bot!" + "\n" +
            "1- Para converter qualquer valor em Real em outras moedas obrigatórias" + "\n" + 
            "2- Para converter qualquer valor em qualquer moeda para qualquer outra moeda" + "\n" + 
            "3- Listar a cotação do Real em todas as moedas"});
            break;
    case "ultimaCotacao":
          res.json({ "fulfillmentText": "Cotação do Real em Dólar: $ " + ultimasCotacoes.USDBRL.high + 
            " Cotação do Real em Euro: $" + ultimasCotacoes.EURBRL.high + 
            " Cotação do Real em Bitcoin: $ " + ultimasCotacoes.BTCBRL.high + 
            " Cotação do Real em Yens: $ " + ultimasCotacoes.JPYBRL.high});
            break;
    case "converterReal":
        var valor = req.body.queryResult.parameters["number"]
        var valorFinal = valor;
        var moeda1 = req.body.queryResult.parameters["moeda2"]
        var moeda2 = req.body.queryResult.parameters["moeda1"]
        switch(moeda2){
            case "dolar":
                valorFinal = valorFinal * ultimasCotacoesBR.BRLUSD.high;
                break;
            case "euro":
                valorFinal = valorFinal * ultimasCotacoesBR.BRLEUR.high;
                break;
            case "yen":
                valorFinal = valorFinal * ultimasCotacoesBR.BRLJPY.high;
                break;
            case "iene":
                valorFinal = valorFinal * ultimasCotacoesBR.BRLJPY.high;
                break;            
        }
        res.json({ "fulfillmentText": valor + " reais em " + moeda2 + " é: " + valorFinal.toFixed(2)});
        break;
    case "converterTudo":
        var valor = req.body.queryResult.parameters["number"]
        var valorFinal = valor;
        var moeda1 = req.body.queryResult.parameters["moeda1"]
        var moeda2 = req.body.queryResult.parameters["moeda2"]
        if(moeda1 == "dolar" && moeda2 == "reais"){
            valorFinal = valorFinal * ultimasCotacoesUS.USDBRL.high;
        }
        if(moeda1 == "dolar" && moeda2 == "euro"){
            valorFinal = valorFinal * ultimasCotacoesUS.USDEUR.high;
        }
        if(moeda1 == "dolar" && moeda2 == "yen"){
            valorFinal = valorFinal * ultimasCotacoesUS.USDJPY.high;
        }
        if(moeda1 == "euro" && moeda2 == "reais"){
            valorFinal = valorFinal * ultimasCotacoesEU.EURBRL.high;
        }
        if(moeda1 == "euro" && moeda2 == "dolar"){
            valorFinal = valorFinal * ultimasCotacoesEU.EURUSD.high;
        }
        if(moeda1 == "euro" && moeda2 == "yen"){
            valorFinal = valorFinal * ultimasCotacoesEU.EURJPY.high;
        }
        if(moeda1 == "yen" && moeda2 == "reais"){
            valorFinal = valorFinal * ultimasCotacoesJP.JPYBRL.high;
        }
        if(moeda1 == "yen" && moeda2 == "dolar"){
            valorFinal = valorFinal * ultimasCotacoesJP.JPYUSD.high;
        }
        if(moeda1 == "yen" && moeda2 == "euro"){
            valorFinal = valorFinal * ultimasCotacoesJP.JPYEUR.high;
        }
        if(moeda1 == "bitcoin" && moeda2 == "reais"){
            valorFinal = valorFinal * ultimasCotacoesBIT.BTCBRL.high;
        }
        if(moeda1 == "bitcoin" && moeda2 == "dolar"){
            valorFinal = valorFinal * ultimasCotacoesBIT.BTCUSD.high;
        }
        if(moeda1 == "bitcoin" && moeda2 == "euro"){
            valorFinal = valorFinal * ultimasCotacoesBIT.BTCEUR.high;
        }
        if(moeda1 == "reais" && moeda2 == "dolar"){
            valorFinal = valorFinal * ultimasCotacoesBR.BRLUSD.high;
        }
        if(moeda1 == "reais" && moeda2 == "euro"){
            valorFinal = valorFinal * ultimasCotacoesBR.BRLEUR.high;
        }
        if(moeda1 == "reais" && moeda2 == "yen"){
            valorFinal = valorFinal * ultimasCotacoesBR.BRLJPY.high;
        }
        res.json({ "fulfillmentText": valor + "\n" + moeda1 + " em " + moeda2 + " é: " + valorFinal.toFixed(2)});
        break;
  }

   

}

module.exports = {
    botDePedidos
}