const formatoEvento = JSON.parse(JSON.stringify(
{
    "followupEventInput": {
        "name": "event-name",
        "languageCode": "pt-BR",
        "parameters": {}
    }
}))


function acionarEvento(evento)
{
    formatoEvento.followupEventInput.name = evento
    const resEvento = JSON.stringify(formatoEvento)

    return resEvento
}


module.exports = acionarEvento