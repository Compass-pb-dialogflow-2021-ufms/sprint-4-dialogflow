const axios = require('axios')
const res = require('express/lib/response')


async function outrasMoedas(moedaOriginal, moedaConverter, valorConverter)
{
        try
        {
            const reqApiExterna = `https://economia.awesomeapi.com.br/last/${moedaOriginal}-${moedaConverter}`
            cotacao = await axios.get(reqApiExterna)


            //Serve para conseguir acessar uma chave da resposta da api externa
            const aux = moedaOriginal + moedaConverter
            cotacao = Number(cotacao.data[aux].bid)

            
            //tratamento de erro
            if(cotacao == NaN)
            {
                text = 'Infelizmente houve um erro no servidor, tente novamente mais tarde.'
                return text
            }
            else
            {
                const valorConversao = cotacao * valorConverter
                return valorConversao
            }
        }
        catch(erro)
        {
            text = `Não suportamos a conversão de ${moedaOriginal} para ${moedaConverter}.`
            console.log(erro)
            return text
        }
}


module.exports = outrasMoedas