require('dotenv').config()
const axios = require('axios')

const API_BASE_URL = process.env.API_BASE_URL
const search = (bodyRequest) => {
    return axios.post(`${API_BASE_URL}/search`, bodyRequest)
}

const reservation = (bodyRequest) => {
    return axios.post(`${API_BASE_URL}/reservation`, bodyRequest)
}

const checkin = (bodyRequest) => {
    return axios.post(`${API_BASE_URL}/checkin`, bodyRequest)
}

const status = (bodyRequest) => {
    return axios.post(`${API_BASE_URL}/status`, bodyRequest)
}
module.exports = {
      search
    , reservation
    , checkin
    , status
}