const respostaMensagem = require('../../modelsResponse/respostaMensagem')
const tratarBitcoin = require('./tratarBitcoin')
const outrasMoedas = require('./outrasMoedas')


async function converteValor(req, res)
{
    //variáveis
    let text
    const parametros = req.body.queryResult.parameters
    const values = Object.values(parametros) 
    let moedaOriginal = values[1].currency
    let moedaConverter = values[0][0]
    const valorConverter = values[1].amount


    if(moedaOriginal == moedaConverter)
    {
        if(moedaOriginal == 'XBT')
            moedaOriginal = moedaConverter = 'BTC'
        text = `Não há necessidade de conversão, pois ${valorConverter} ${moedaOriginal} já está em ${moedaConverter}. Posso ajudar com mais alguma coisa?`
        res.status(200)
        res.send(respostaMensagem(text))
    }
    else if(moedaOriginal == 'XBT' || moedaConverter == 'XBT') //Vendo se há bitcoin envolvido
    {
        text = await tratarBitcoin(moedaOriginal, moedaConverter, valorConverter) + ' Posso ajudar com mais alguma coisa?'
        res.status(200)
        res.send(respostaMensagem(text))
    }
    else
    {
        let valorConversao = await outrasMoedas(moedaOriginal, moedaConverter, valorConverter)
        if(typeof valorConversao == 'number')
        {
            valorConversao = (valorConversao.toFixed(2)).replace('.', ',')
            text = `A conversão de ${valorConverter} ${moedaOriginal} para ${moedaConverter} gera um montante de ${valorConversao} ${moedaConverter}. Posso ajudar com mais alguma coisa?`
            res.status(200)

        }
        else
        {
            text = valorConversao + ' Posso ajudar com mais alguma coisa?'
            res.status(500)
        }
        res.send(respostaMensagem(text))
    }
}


module.exports = converteValor