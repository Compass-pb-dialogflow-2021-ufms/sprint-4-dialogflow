require('dotenv').config()
const mongoose = require('mongoose')

const host = process.env.DB_HOST

mongoose.connect(host)
mongoose.Promise = global.Promise

module.exports = mongoose