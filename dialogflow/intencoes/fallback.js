const respostaMensagem = require('../modelsResponse/respostaMensagem')


function fallback(_, res)
{
        const text = 'Desculpe-me, mas infelizmente não consegui compreender. Deseja ver o menu de ajuda? Ele contêm informações que podem ser úteis, como um pequeno guia para utilizar as minhas funcionalidades.'
        res.send(respostaMensagem(text))
}


module.exports = fallback