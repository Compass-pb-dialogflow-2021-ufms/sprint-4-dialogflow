const axios = require('axios')
const searchRequest = require('../../modelsAPI/searchRequest')


async function searchFlight(parameters)
{
    const url = 'https://aerobotapi2.herokuapp.com/search'
    const departureDate = parameters.departureDate.split('T')
    const returnDate = parameters.returnDate.split('T')

    try
    {
        const request = searchRequest(parameters, departureDate[0], returnDate[0])
        const response = await axios.post(url, request)
        return response.data.chatbot_response
    }
    catch(erro)
    {
        console.log(erro)
        return 'Internal server error'
    }
}


module.exports = searchFlight