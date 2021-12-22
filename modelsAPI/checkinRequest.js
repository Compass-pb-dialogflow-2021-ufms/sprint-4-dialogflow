const format = JSON.parse(JSON.stringify(
{
    "flightCode": "1234",
    "name": "Chaves Villas Boas",
    "cpf": "000.000.000-00"
}))


function checkinRequest(flightCode, name, cpf)
{
    format.flightCode = flightCode
    format.name = name
    format.cpf = cpf

    const request = JSON.stringify(format)
    return request
}


module.exports = checkinRequest