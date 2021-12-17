const axios = require('axios')
const respostaMensagem = require('../modelsResponse/respostaMensagem')


async function getPrincipaisCotacoes(_, res)
{
    try
    {
        let text = 'Aqui estão as cotações das principais moedas para o real:'
        const cotacoes = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,JPY-BRL,BTC-BRL')


        //tratamento para o bitcoin
        const bitcoin = await axios.get('https://economia.awesomeapi.com.br/last/BTC-BRL')
        const {BTCBRL} = bitcoin.data
        let cotacaoBitcoin = await axios.get('https://brasilbitcoin.com.br/API/prices/BTC')
        cotacaoBitcoin = cotacaoBitcoin.data.buy

        
        const {USDBRL, EURBRL, JPYBRL} = cotacoes.data
        const moedas = [USDBRL, EURBRL, JPYBRL, BTCBRL]

        moedas.forEach(moeda => {
            let valor
            const nome = moeda.name.split('/')
            const dia = moeda.create_date.substring(8, 10)
            const mes = moeda.create_date.substring(5, 7)
            const ano = moeda.create_date.substring(0, 4)
            const horario = moeda.create_date.substring(11, 16)
            if(nome[0] == 'Bitcoin')
                valor = cotacaoBitcoin.replace('.', ',')
            else
            {
                valor = moeda.bid.substring(0,4)
                valor = valor.replace('.', ',')
            }

            const aux = `\n\n${nome[0]} =====> R$: ${valor}` + 
            `\nÚltima atualização no dia ${dia} do ${mes} de ${ano} às ${horario}`
            text += aux
        })

        aux = '\n\nPosso ajudar com mais alguma coisa? Como converter um valor em real para uma dessas moedas, por exemplo.'
        text += aux
        res.status(200)
        res.send(respostaMensagem(text))
    }
    catch(erro)
    {
        text = 'Infelizmente houve um erro no servidor, tente novamente mais tarde.'
        res.status(500)
        res.send(respostaMensagem())
        console.log(erro)
    }
}


module.exports = getPrincipaisCotacoes