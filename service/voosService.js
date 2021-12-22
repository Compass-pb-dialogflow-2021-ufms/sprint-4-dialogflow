const axios = require('axios');
const apiUrl = 'https://compasso-flight.herokuapp.com/api/v1/'

async function checkIn(cpfPassageiro, numVoo) {
    const endPoint = 'checkin'
    return axios.post(`${apiUrl}${endPoint}`, {
        'flightCode': numVoo,
        'cpf': cpfPassageiro
    }).then(response => response).catch(error => error.response.data);
}

async function statusDaPassagem(cpfPassageiro, numVoo) {
    const endPoint = 'status';
    return axios.post(`${apiUrl}${endPoint}`, {
        'flightCode': numVoo,
        'cpf': cpfPassageiro
    }).then(response => response).catch(error => error.response.data);
}

module.exports = {
    checkIn,
    statusDaPassagem
}