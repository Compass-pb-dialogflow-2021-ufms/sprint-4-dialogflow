const axios = require('axios');
const Usuario = require('../modelo/usuario')

const botDePedidos = async (req, res) => {
  let intentName = req.body.queryResult.intent.displayName;
  let source = req.body.originalDetectIntentRequest.source;

  switch(intentName){
    case "Status":
        res.json({ "fulfillmentText": "Qual o código do voo que você deseja ver os status?"});
        break;
    case "Status - checarStatus":
      let cpfStatus = req.body.queryResult.parameters["cpf"]
      let flightCodeStatus = req.body.queryResult.parameters["flightCode"]

      const respostaStatus = await axios.post('https://aerobotapi2.herokuapp.com/checkin', {
        flightCode: flightCodeStatus,
        cpf: cpfStatus
      })
      res.json({ "fulfillmentText": "CIA AÉREA: " + respostaStatus.data.company + 
                                    " Origem do Voo: " + respostaStatus.data.whereFrom +
                                    " Cidade: " + respostaStatus.data.cityFrom +
                                    " Data: " + respostaStatus.data.departureDate +
                                    " Horário: " + respostaStatus.data.departureHour +
                                    " Destino do Voo: " + respostaStatus.data.whereTo +
                                    " Cidade: " + respostaStatus.data.cityTo +
                                    " Data: " + respostaStatus.data.returnDate +
                                    " Horário: " + respostaStatus.data.returnHour +
                                    " Nome do passageiro: " + respostaStatus.data.name +
                                    " Assento de ida: " + respostaStatus.data.seatGoing +
                                    " Assento de volta: " + respostaStatus.data.seatReturn});
      break;
    case "Check in - checarCpf":
        let cpfCheck = req.body.queryResult.parameters["cpf"]
        let flightCodeCheck = req.body.queryResult.parameters["flightCode"]
        let namePersonCheck = req.body.queryResult.parameters.person["name"]

        const respostaCheckIn = await axios.post('https://aerobotapi2.herokuapp.com/checkin', {
          flightCode: flightCodeCheck,
          name: namePersonCheck,
          cpf: cpfCheck
        })
        if(respostaCheckIn.data.message == "Check-in já realizado anteriormente"){
          res.json({ "fulfillmentText": "Check-in já realizado anteriormente"});
        }else{
          res.json({ "fulfillmentText": "Codigo do Check-in" + respostaCheckIn.data.checkinCode});
        }
        break;  
  }
}

module.exports = {
    botDePedidos
}