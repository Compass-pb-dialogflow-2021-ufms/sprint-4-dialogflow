const mongoose = require('../db/userDB')

    const userSchema = new mongoose.Schema({
        userId: {
            type: String,
            //require: true
        },
        session: {
            type: String,
            //require: true
        }
    })

const User = mongoose.model('User', userSchema)

module.exports = User