const searchRequest = require('../../modelsAPI/searchRequest')
const axios = require('axios')


async function searchFlight()
{
    const whereFrom = 'Campo Grande'
    const whereTo = 'Rio de janeiro'
    const departureDate = '2022-01-01'
    const roundTrip = true
    const returnDate = '2022-01-10'
    const howManyPeople = 2


    searchRequest.whereFrom = whereFrom
    searchRequest.departureDate = departureDate
    searchRequest.returnDate = returnDate
    const requestApi = JSON.stringify(searchRequest)
    const responseApi = await axios.post(`https://compasso-flight.herokuapp.com/api/v1/search`, requestApi)
    console.log(responseApi)
}


module.exports = searchFlight