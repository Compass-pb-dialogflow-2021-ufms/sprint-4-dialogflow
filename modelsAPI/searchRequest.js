const searchRequest = JSON.parse(JSON.stringify({
    "whereFrom": "POA",
    "whereTo": "GRU",
    "departureDate": "2021-01-01",
    "roundTrip": true,
    "returnDate": "2021-01-10",
    "howManyPeople": 2  
}))


module.exports = searchRequest