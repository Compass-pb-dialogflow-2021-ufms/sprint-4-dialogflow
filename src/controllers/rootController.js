const switchIntent = (req, res, intent) => {
    switch (intent) {
        case 'Default Welcome Intent':
            defaultWelcomeIntent(req, res)
            break
        case 'Default Fallback Intent':
            defaultFallbackIntent(req, res)
            break
        case 'Help Intent':
            helpIntent(req, res)
            break
        case 'About me Intent':
            aboutMeIntent(req, res)
            break
        case 'Farewell Intent':
            farewellIntent(req, res)
            break
    }
}

const defaultWelcomeIntent = (req, res) => {}

const defaultFallbackIntent = (req, res) => {}

const helpIntent = (req, res) => {}

const aboutMeIntent = (req, res) => {}

const farewellIntent = (req, res) => {}

const main = (req, res) => {
    const intent = req.body.queryResult.intent.displayName

    switchIntent(req, res, intent)
}

module.exports = {
    main
}