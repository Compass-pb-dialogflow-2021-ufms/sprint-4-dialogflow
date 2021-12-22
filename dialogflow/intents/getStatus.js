const axios = require('axios')
const formattingCpf = require('../../auxiliaryFunctions/formattingCpf')
const statusRequest = require('../../modelsAPI/statusRequest')


async function getStatus(parameters)
{
    const url = 'https://aerobotapi2.herokuapp.com/status'
    const cpf = parameters.cpf
    const flightNumber = parameters.flightNumber
    const formattedCpf = formattingCpf(cpf)
    
    
    const response = await axios.post(url, statusRequest(flightNumber, formattedCpf))
    return response.data.chatbot_response + '\nPosso te ajudar com mais alguma coisa?'
}


module.exports = getStatus