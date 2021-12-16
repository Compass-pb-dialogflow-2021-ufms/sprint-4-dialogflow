const router = require('express').Router();
const resposta = require('../Intents/respostasIntents');

router.post('/', async (req, res) => {

  const tag = req.body.queryResult.intent.displayName;

  let jsonResponse = {
    fulfillment_messages: [{
      text: {
        text: [],
      }
    }]
  };
  let objetoMensagens = jsonResponse.fulfillment_messages[0];
  if (tag === 'Default Welcome Intent') {
    objetoMensagens.text.text.push(await resposta.saudacaoUsuario(req));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'Default Fallback Intent') {
    objetoMensagens.text.text.push(resposta.fallback());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'menu') {
    objetoMensagens.text.text.push(resposta.menu());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'cotacaoAtualizada') {
    objetoMensagens.text.text.push(await resposta.cotacaoReal());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'conversaoMonetaria') {
    objetoMensagens.text.text.push(await resposta.consversaoMonetaria(req.body.queryResult.parameters));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }
  res.send(jsonResponse);
})

module.exports = router;