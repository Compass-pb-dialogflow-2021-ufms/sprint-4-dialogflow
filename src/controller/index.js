const intents = async (req, res) => {
    
    try {
    
        let displayName = req.body.queryResult.intent.displayName
        switch (displayName) {
            
            //DEFAULT WELCOME INTENT START
            case 'Default Welcome Intent':
                res.json({ "fulfillmentText": "Welcome!" })         
            break
            //DEFAULT WELCOME INTENT END

            //HELP INTENT START
            case 'Help Intent':

            break
            //HELP INTENT END

        }

    } catch (error) {
        res.json({ "fulfillmentText": "Oops! Something wrong happened " + error })
    }
}
const log = (req, res) => {
    res.json({ "fulfillmentText": "GET controller sucessful" })
}

module.exports = {
    intents,
    log
}
