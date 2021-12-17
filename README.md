### Desenvolvimento
De início uma das primeiras dificuldades foi a implementação da api externa (https://docs.awesomeapi.com.br/api-de-moedas) junto com o dialogflow, não me atentei em procurar uma outra api no início do desenvolvimento.
Por tanto tive que continuar a utilização dela, por causa disso a conversão/cotação de bitcoin para real brasileiro pode estar incorreta (ex o correto seria 269.000 o bot retorna 269). Porém, consegui implementá-la. Uma funcionalidade que não consegui implementar foi a capacidade do bot responder uma mensagem de olá personalizada caso o usuário já tenha falado com o bot. 

Consegui integrar o bot no app Line é possível encontrar o bot no aplicativo pesquisando este Id: @009vbrwc o nome vai estar como Cotacao Monetaria. 

Subi o projeto no heroku disponivel em https://cotacao-monetaria-chatbot.herokuapp.com/ 

### Tecnologias Utilizadas
- nodejs
  - express
  - actions-on-google
  - node-fetch
- ngrok
- heroku

### Intenções
As intenções obrigatórias estão presente no projeto assim como duas novas
- Cotacao: intenção necessária para entender quando o usuário quer saber da cotação de uma moeda em relação a outra
- ConverterMoeda: intenção necessária para entender quando o usuário gostaria de converter uma quantidade específica de uma moeda em outra

