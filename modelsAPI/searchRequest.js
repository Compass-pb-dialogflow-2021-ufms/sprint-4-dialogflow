const format = JSON.parse(JSON.stringify({
    "whereFrom": "POA",
    "whereTo": "GRU",
    "departureDate": "2021-01-01",
    "roundTrip": true,
    "returnDate": "2021-01-10",
    "howManyPeople": 2  
}))


function searchRequest(parameters, departureDate, returnDate)
{
    format.whereFrom = parameters.whereFrom
    format.whereTo = parameters.whereTo
    format.departureDate = departureDate
    format.returnDate = returnDate
    format.howManyPeople = parameters.howManyPeople

    if(parameters.roundTrip == 'Sim' || parameters.roundTrip == 'sim')
        format.roundTrip = true
    else
        format.roundTrip = false

    const request = JSON.stringify(format)
    return request
}

module.exports = searchRequest