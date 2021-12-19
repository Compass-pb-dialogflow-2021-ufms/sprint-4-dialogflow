const formato = JSON.parse(JSON.stringify({
        "fulfillmentMessages": [
          {
            "text": {
              "text": [
                "Text response from webhook"
              ]
            }
          }
        ]
    }))
    
    
    
    
    
    function mensagemFormatada(text)
    {
        formato.fulfillmentMessages[0].text.text.splice(0, 1, text)
        const mensagem = JSON.stringify(formato)
        return mensagem
    }
    
    
    module.exports = mensagemFormatada