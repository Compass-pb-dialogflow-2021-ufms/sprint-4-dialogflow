const endpointBuilder = (moeda_um, moeda_dois) => {
    let endpoint = 'last/'

    const moedas = [
        ['Dólar Americano', 'USD']
        , ['Euro', 'EUR']
        , ['Yen', 'JPY']
        , ['Real', 'BRL']
        , ['Bitcoin', 'BTC']
    ]
    for (let i = 0; i < moedas.length; i++) {
        if (moeda_um === moedas[i][0]) endpoint += moedas[i][1] + '-'
    }
    for (let i = 0; i < moedas.length; i++) {
        if (moeda_dois === moedas[i][0]) endpoint += moedas[i][1]
    }

    return endpoint
}

const valueExtractor = (moeda_um, moeda_dois, apiResponse) => {
    let bid

    switch (moeda_um) {
        case 'Real':
            switch (moeda_dois) {
                case 'Dólar Americano':
                    bid = apiResponse.data.BRLUSD.bid
                    break
                case 'Euro':
                    bid = apiResponse.data.BRLEUR.bid
                    break
                case 'Yen':
                    bid = apiResponse.data.BRLJPY.bid
                    break
                case 'Bitcoin':
                    bid = apiResponse.data.BRLBTC.bid
                    break
            }
            break
        case 'Dólar Americano':
            switch (moeda_dois) {
                case 'Real':
                    bid = apiResponse.data.USDBRL.bid
                    break
                case 'Euro':
                    bid = apiResponse.data.USDEUR.bid
                    break
                case 'Yen':
                    bid = apiResponse.data.USDJPY.bid
                    break
                case 'Bitcoin':
                    bid = apiResponse.data.USDBTC.bid
                    break
            }
            break
        case 'Euro':
            switch (moeda_dois) {
                case 'Dólar Americano':
                    bid = apiResponse.data.EURUSD.bid
                    break
                case 'Real':
                    bid = apiResponse.data.EURBRL.bid
                    break
                case 'Yen':
                    bid = apiResponse.data.EURJPY.bid
                    break
                case 'Bitcoin':
                    bid = apiResponse.data.EURBTC.bid
                    break
            }
            break
        case 'Yen':
            switch (moeda_dois) {
                case 'Dólar Americano':
                    bid = apiResponse.data.JPYUSD.bid
                    break
                case 'Euro':
                    bid = apiResponse.data.JPYEUR.bid
                    break
                case 'Real':
                    bid = apiResponse.data.JPYBRL.bid
                    break
                case 'Bitcoin':
                    bid = apiResponse.data.JPYBTC.bid
                    break
            }
            break
        case 'Bitcoin':
            switch (moeda_dois) {
                case 'Dólar Americano':
                    bid = apiResponse.data.BTCUSD.bid
                    break
                case 'Euro':
                    bid = apiResponse.data.BTCEUR.bid
                    break
                case 'Yen':
                    bid = apiResponse.data.BTCJPY.bid
                    break
                case 'Real':
                    bid = apiResponse.data.BTCBRL.bid
                    break
            }
            break
    }

    return bid
}

module.exports = {
      endpointBuilder
    , valueExtractor
}