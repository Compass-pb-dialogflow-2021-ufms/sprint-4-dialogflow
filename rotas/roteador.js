const roteador = require('express').Router()


roteador.post('', (req, res) =>
{
        const intencao = req.body.originalDetectIntentRequest.source
        console.log(intencao)
})


module.exports = roteador