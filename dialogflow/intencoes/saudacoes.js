const existeIdTelegram = require('../../dataBase/funcoes/existeIdTelegram')
const existeIdLine = require('../../dataBase/funcoes/existeIdLine')
const adicionarUsuarioTelegram = require('../../dataBase/funcoes/adicionarUsuarioTelegram')
const adicionarUsuarioLine = require('../../dataBase/funcoes/adicionarUsuarioLine')
const mensagemFormatada = require('../modelsResponse/respostaMensagem')


async function boasVindas(req, res)
{
    let text
    const source = req.body.originalDetectIntentRequest.source
    if(source == 'telegram')
    {
        const id = req.body.originalDetectIntentRequest.payload.data.from.id
        const nome = req.body.originalDetectIntentRequest.payload.data.from.first_name
        const resposta = await existeIdTelegram(id) 
        if(resposta == false)
        {
            await adicionarUsuarioTelegram(id, nome)
            text = `Seja bem vindo, ${nome}. Eu sou o converte.bot e posso te mostrar as cotações das principais moedas, posso converter valores de uma moeda para outra, além de poder mostrar um menu de ajuda, que possui informações de minhas capacidades e alguns exemplos. Como posso te ajudar?`
        }
        else
        {
            text = `É bom te ver novamente, ${nome}! Posso te mostrar as cotações das principais moedas, posso converter valores de uma moeda para outra, além de poder mostrar um menu de ajuda, que possui informações de minhas capacidades e alguns exemplos. Como posso te ajudar hoje?` 
        }
    }
    else if(source == 'line')
    {
        const id = req.body.originalDetectIntentRequest.payload.data.source.userId
        const resposta = await existeIdLine(id)
        if(resposta == false)
        {
            await adicionarUsuarioLine(id)
            text = `Seja bem vindo. Eu sou o converte.bot e posso te mostrar as cotações das principais moedas, posso converter valores de uma moeda para outra, além de poder mostrar um menu de ajuda, que possui informações de minhas capacidades e alguns exemplos. Como posso te ajudar?`
        }
        else
        {
            text = `É bom te ver novamente! Posso te mostrar as cotações das principais moedas, posso converter valores de uma moeda para outra, além de poder mostrar um menu de ajuda, que possui informações de minhas capacidades e alguns exemplos. Como posso te ajudar hoje?` 
        }
    }

    
    res.send(mensagemFormatada(text))
}


module.exports = boasVindas