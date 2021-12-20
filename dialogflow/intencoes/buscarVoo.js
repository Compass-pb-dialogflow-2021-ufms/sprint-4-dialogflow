const searchRequest = require('../../modelsAPI/searchRequest')
const axios = require('axios')


async function buscarVoo()
{
    const origem = 'Campo Grande'
    const destino = 'Rio de janeiro'
    const dataIda = '2022-01-01'
    const roundTrip = true
    const dataRetorno = '2022-01-10'
    const quantidadePessoas = 2


    searchRequest.whereFrom = origem
    searchRequest.departureDate = dataIda
    searchRequest.returnDate = dataRetorno
    const requestApi = JSON.stringify(searchRequest)
    const responseApi = await axios.post(`https://compasso-flight.herokuapp.com/api/v1/search`, requestApi)
    console.log(responseApi)
}


module.exports = buscarVoo