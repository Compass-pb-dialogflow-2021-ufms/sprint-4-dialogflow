require('dotenv').config()
const axios = require('axios')

const API_URL = process.env.API_URL
const API = axios.create({
    baseURL: API_URL
})

module.exports = API