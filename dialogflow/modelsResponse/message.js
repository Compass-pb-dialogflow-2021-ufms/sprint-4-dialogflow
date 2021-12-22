const format = JSON.parse(JSON.stringify({
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
    
    
    
    
    
    function formatedMessage(text)
    {
        format.fulfillmentMessages[0].text.text.splice(0, 1, text)
        const message = JSON.stringify(format)
        return message
    }
    
    
    module.exports = formatedMessage