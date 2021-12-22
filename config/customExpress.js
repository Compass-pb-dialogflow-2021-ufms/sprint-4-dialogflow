const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const botReponses = require("./../controllers/index");
const { default: axios } = require("axios");

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign().include("controllers/index.js").into(app);

  app.get("/", (request, response) => {
    response.send("Servidor funcionando");
  });

  // app.get('/', (req, res) => {
  //   axios.get('https://compasso-flight.herokuapp.com/api/v1/reservation').then((resp)=> {
  //     console.log(resp.data)
  //   })
  // })

  app.post("/", async (request, response) => {
    const tag = request.body.queryResult.intent.displayName;
    let originCity = request.body.queryResult.parameters["city"];
    
    console.log(request.body.queryResult);

    let jsonResponse = {
      fulfillment_messages: [
        {
          text: {
            text: [],
          },
        },
      ],
    };
    let objMessage = jsonResponse.fulfillment_messages[0];
    if (tag === "welcome") {
      objMessage.text.text.push(await botReponses.welcome());
    } else if (tag === "fallback") {
      objMessage.text.text.push(await botReponses.fallback());
    } else if (tag === "help") {
      objMessage.text.text.push(await botReponses.help());
    } else if (tag === "sobreBot") {
      objMessage.text.text.push(await botReponses.about());
    } else if (tag === "buscaDePassagem") {

      
      objMessage.text.text.push('Para realizar a busca por passagem aérea você precisa me informar a origem do voo.\n Qual a cidade de origem do voo? Ex: Campo Grande - MS');

    } 
    

    else if (tag === "buscaDePassagemCidadeDestino") {
      
      
      objMessage.text.text.push(`Certo ${originCity}! Agora me diga qual a cidade de destino do voo? Ex: Congonhas - SP`);

    } else if (tag === "destinoNaoEncontrado") {
      objMessage.text.text.push(`Ops! Não entendi! Me diga qual a cidade de destino do voo?`);

    } else if (tag === "dataVoo") {
      
      //console.log(destinyCity);
      objMessage.text.text.push(`Okay! ${originCity}Me diga a data desejada para o voo?`);

    } else if (tag === "incluirPassagemDeVolta") {
      objMessage.text.text.push(`Você deseja incluir a volta?`);

    } else if (tag === "incluirPassagemDeVoltaSim") {
      objMessage.text.text.push(`Por favor me informe a data desejada para o retorno. e ${(originCity)}`);

    }else if (tag === "dataPassagemDeVolta") {
      objMessage.text.text.push(`Por favor me informe a data desejada para o retorno `);

    } else {
      jsonResponse = {
        //fulfillment text response to be sent to the agent if there are no defined responses for the specified tag
        fulfillment_messages: [
          {
            text: {
              ////fulfillment text response to be sent to the agent
              text: [
                `There are no fulfillment responses defined for "${tag}"" tag`,
              ],
            },
          },
        ],
      };
    }
    response.send(jsonResponse);
  });

  return app;
};
