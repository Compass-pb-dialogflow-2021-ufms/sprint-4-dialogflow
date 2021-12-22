const format = JSON.parse(JSON.stringify(
{
    "flightCode": "1234",
    "cpf": "000.000.000-00"
}))


function statusRequest(flightCode, cpf)
{
    format.flightCode = flightCode
    format.cpf = cpf
    
    const request = JSON.stringify(format)
    return request
}


module.exports = statusRequest