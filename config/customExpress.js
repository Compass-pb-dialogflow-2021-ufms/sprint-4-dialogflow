const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const cotacao = require("../controllers/cotacao");

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  consign().include("controllers", "config").into(app);

  app.post("/", async (request, response) => {
    const tag = request.body.queryResult.intent.displayName;

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
    if (tag === "Default Welcome Intent") {
      objMessage.text.text.push(await cotacao.welcome());
    } else if (tag === "Default Fallback Intent") {
      objMessage.text.text.push(await cotacao.fallback());
    } else if (tag === "Ajuda") {
      objMessage.text.text.push(await cotacao.help());
    } else if (tag === "cotacaoDolar") {
      objMessage.text.text.push(await cotacao.cotacaoDolar());
    } else if (tag === "cotacaoEuro") {
      objMessage.text.text.push(await cotacao.cotacaoEuro());
    } else if (tag === "cotacaoYen") {
      objMessage.text.text.push(await cotacao.cotacaoYen());
    } else if (tag === "cotacaoBitcoin") {
      objMessage.text.text.push(await cotacao.cotacaoBitcoin());
    } else if (tag === "cotacaoReal") {
      objMessage.text.text.push(await cotacao.cotacaoReal());
    } else {
      jsonResponse = {
        fulfillment_messages: [
          {
            text: {
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
