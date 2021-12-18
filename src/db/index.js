const config = require('config')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://flightdb:flightdatabase123@cluster0.jzctd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.Promise = global.Promise

module.exports = mongoose