const respostaMensagem = require('../modelsResponse/respostaMensagem')


function menuAjuda(_, res)
{
    let text = 'Olá, sou o converte.bot. Tenho duas funções principais, consigo mostrar-te as cotações das principais moedas(Dólar, Euro, Yen e Bitcoin), além de conseguir fazer conversões entre moedas diferentes. Para conseguir utilizar essas funções, basta escrever que deseja isso, como por exemplo "Quero ver as principais cotações" ou "20 reais é quanto em Yen?" que irei te responder :)' + '\nO que gostaria de fazer?'


    res.status(200).send(respostaMensagem(text))
}


module.exports = menuAjuda