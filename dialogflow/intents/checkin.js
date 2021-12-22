const axios = require('axios')
const formattingCpf = require('../../auxiliaryFunctions/formattingCpf')
const checkinRequest = require('../../modelsAPI/checkinRequest')


async function checkin(parameters)
{
    const uri = 'https://aerobotapi2.herokuapp.com/checkin'
    const flightCode = parameters.flightCode
    const name = parameters.name
    const formattedCpf = formattingCpf(parameters.cpf)
    
    try
    {
        const request = checkinRequest(flightCode, name, formattedCpf)
        const response = await axios.post(uri, request)
        return response.data.chatbot_response
    }
    catch(erro)
    {
        console.log(erro.Error)
        return 'Internal server error'
    }
    
    
}


module.exports = checkin