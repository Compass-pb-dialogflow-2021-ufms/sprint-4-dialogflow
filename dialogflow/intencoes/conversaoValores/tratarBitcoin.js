const axios = require('axios')
const { text } = require('express')
const outrasMoedas = require('./outrasMoedas')


async function tratarBitcoin(moedaOriginal, moedaConverter, valorConverter)
{
    //Real vai ser a base de todas as conversões envolvendo Bitcoin
    let valorConvertido, text
    const real = 'BRL'
    let cotacaoRealBitcoin = await axios.get('https://brasilbitcoin.com.br/API/prices/BTC')
    cotacaoRealBitcoin = cotacaoRealBitcoin.data.buy
    cotacaoRealBitcoin = Number(cotacaoRealBitcoin)
    

    if(moedaOriginal == real)
    {
        valorConvertido = valorConverter / cotacaoRealBitcoin
        valorConvertido = (valorConvertido.toFixed(8)).replace('.', ',')
        text = `${valorConverter} ${moedaOriginal} representa ${valorConvertido} BTC`
        return text
    }
    else if(moedaConverter == real)
    {
        valorConvertido = valorConverter * cotacaoRealBitcoin
        valorConvertido = ((Number(valorConvertido)).toFixed(2)).replace('.', ',')
        text = `${valorConverter} BTC representa ${valorConvertido} ${moedaConverter}.`
        return text

    }
    else if(moedaOriginal == 'XBT')
    {
        const auxValorReal = valorConverter * cotacaoRealBitcoin
        valorConvertido = await outrasMoedas(real, moedaConverter, auxValorReal)
        valorConvertido = ((Number(valorConvertido)).toFixed(2)).replace('.', ',')
        text = `${valorConverter} BTC representa ${valorConvertido} ${moedaConverter}.`
        return text
    }
    else
    {
        valorConvertido = await outrasMoedas(moedaOriginal, real, valorConverter)
        valorConvertido = Number(valorConvertido) / cotacaoRealBitcoin
        if(valorConvertido < 0.00000001)
        {
            text = `${valorConverter} ${moedaOriginal} não é o suficiente para comprar a menor divisão do bitcoin.`
            return text
        }
        else
        {
            valorConvertido = (valorConvertido.toFixed(8)).replace('.', ',')
            text = `${valorConverter} ${moedaOriginal} representa ${valorConvertido} BTC;`
            return text
        }
    }
}


module.exports = tratarBitcoin