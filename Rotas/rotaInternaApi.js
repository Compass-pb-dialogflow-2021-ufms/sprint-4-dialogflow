const router = require('express').Router();
const padrao = require('../Intents/intentPadrao');
const busca = require('../Intents/intentBuscarVoo');
const reserva = require('../Intents/intentReservarVoo');
const compra = require('../Intents/intentComprar');
const checkin = require('../Intents/intentCheck-in');
const status = require('../Intents/intentStatusVoo');

router.post('/', async (req, res) => {

  const tag = req.body.queryResult.intent.displayName;
  const parametros =req.body.queryResult.parameters;
  let jsonResponse = {
    fulfillment_messages: [{
      text: {
        text: [],
      }
    }]
  };
  let objetoMensagens = jsonResponse.fulfillment_messages[0];
  if (tag === 'Default Welcome Intent') {
    objetoMensagens.text.text.push(padrao.welcome());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'Default Fallback Intent') {
    objetoMensagens.text.text.push(padrao.fallback());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'menu') {
    objetoMensagens.text.text.push(padrao.menu());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'sobreMim') {
    objetoMensagens.text.text.push(padrao.menu());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'despedida') {
    objetoMensagens.text.text.push(padrao.menu());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
////////////////////////////////////////////////////////////////////////////////////////////////////////////    
  } else if (tag === 'buscarVoo') {
    objetoMensagens.text.text.push(busca.inicioBuscarVoo());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - destinoFallback') {
    objetoMensagens.text.text.push(busca.buscarVooDestinoFallback());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - OrigemFallback') {
    objetoMensagens.text.text.push(busca.buscarVooOrigemFallback());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - origem') {
    objetoMensagens.text.text.push(busca.origem(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - destino') {
    objetoMensagens.text.text.push(busca.destino(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - dataIda') {
    objetoMensagens.text.text.push(busca.dataIda(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  } else if (tag === 'buscarVoo - dataIdaFallback') {
    objetoMensagens.text.text.push(busca.buscarVooDataIdaFallback(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  } else if (tag === 'buscarVoo - simVolta') {
    objetoMensagens.text.text.push(busca.simVolta());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - dataVolta') {
    objetoMensagens.text.text.push(busca.dataVolta(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - dataVoltaFallback') {
    objetoMensagens.text.text.push(busca.buscarVooDataVoltaFallback());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - naoVolta') {
    objetoMensagens.text.text.push( busca.naoVolta());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  } else if (tag === 'buscarVoo - qtdPassagens') {
    objetoMensagens.text.text.push(busca.qtdAssentos(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  } else if (tag === 'buscarVoo - qtdPassagensFallback') {
    objetoMensagens.text.text.push(busca.buscarVooQtdPassagensFallback());
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
    
  ///////////////////////////////////////////////////////////////////////////////////////////////////////// 
  }else if (tag === 'reservarAssentos') {
    objetoMensagens.text.text.push(reserva.inicioReservarVoo());
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'cadastroPassageiros-reservarAssentos') {
    objetoMensagens.text.text.push(reserva.nomePassageiro(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - cpf') {
    objetoMensagens.text.text.push(reserva.cpfPassageiro(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - telefone') {
    objetoMensagens.text.text.push(reserva.telefonePassageiro(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - dataNascimento') {
    objetoMensagens.text.text.push(reserva.dataNascimentoPassageiro(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - assentoIda') {
    objetoMensagens.text.text.push(reserva.assentoIda(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - simVolta') {
    objetoMensagens.text.text.push(reserva.simVolta());
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - naoVolta') {
    objetoMensagens.text.text.push(await reserva.naoVolta());
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  }else if (tag === 'CP - assentoVolta') {
    objetoMensagens.text.text.push(await reserva.assentoVolta(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens; 
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  }else if (tag === 'comprarPassagens') {
    objetoMensagens.text.text.push(compra.inicioCompraPassagem());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'boleto') {
    objetoMensagens.text.text.push(compra.boleto());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'boleto - yes') {
    objetoMensagens.text.text.push(compra.simFinalizar());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'boleto - no') {
    objetoMensagens.text.text.push(compra.naoFinalizar());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'cartao') {
    objetoMensagens.text.text.push(compra.cartao());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'numeroCartao') {
    objetoMensagens.text.text.push(compra.numeroCartao(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'codigoSeguranca') {
    objetoMensagens.text.text.push(compra.cvvCartao(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'modoCobranca') {
    objetoMensagens.text.text.push(compra.modoPagamento(parametros));
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'simFinalizar') {
    objetoMensagens.text.text.push(compra.simFinalizar());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
  }else if (tag === 'naoFinalizar') {
    objetoMensagens.text.text.push(compra.naoFinalizar());
    jsonResponse.fulfillment_messages[0] = objetoMensagens;
///////////////////////////////////////////////////////////////////////////////////////////////////
}else if (tag === 'check-in') {
  objetoMensagens.text.text.push(checkin.inicioCheck());
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
}else if (tag === 'codigoVoo') {
  objetoMensagens.text.text.push(checkin.codigoVoo(parametros));
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
}else if (tag === 'check - nome') {
  objetoMensagens.text.text.push(checkin.nomeCheck(parametros));
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
}else if (tag === 'check - cpf') {
  objetoMensagens.text.text.push(await checkin.cpfCheck(parametros));
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
//////////////////////////////////////////////////////////////////////////////////////////////////////////  
}else if (tag === 'statusVoo') {
  objetoMensagens.text.text.push(status.inicioStatusVoo());
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
}else if (tag === 'statusVoo - codigoVoo') {
  objetoMensagens.text.text.push(status.codigoVoo(parametros));
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
}else if (tag === 'statusVoo - cpf') {
  objetoMensagens.text.text.push(await status.cpfStatus(parametros));
  jsonResponse.fulfillment_messages[0] = objetoMensagens;
}
  res.send(jsonResponse);
})

module.exports = router;