const eventFormat = JSON.parse(JSON.stringify(
{
    "followupEventInput": {
        "name": "event-name",
        "languageCode": "pt-BR",
        "parameters": {}
    }
}))


function eventTrigger(event)
{
    eventFormat.followupEventInput.name = event
    const eventRes = JSON.stringify(eventFormat)

    return eventRes
}


module.exports = eventTrigger