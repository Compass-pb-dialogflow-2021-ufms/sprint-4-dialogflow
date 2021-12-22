# Projeto-2-Sprint-4
Foi desenvolvido um chabot de Busca e compra de passsagens aéreas com auxílio de uma Api externa de [Voo da compasso](https://compasso-flight.herokuapp.com/api/v1/docs/#/).
### Diário de Bordo:
Em primeiro plano planejei a linha de conversação do bot e analisei a Api externa que seria usada. Logo após criei um projeto no Dialogflow, definindo as entities e seus valores. Em seguida programei as intents e treinei algumas frases. Nos primeiros testes percebi que a funcionalidade /search da Api externa não estava funcionando, o que dificultou muito o desenvolvimento, pois está funcionalidade se envolvia praticamente com todas as intents, assim deixando mais árduo o teste de aplicabilidades do projeto. Também encontrei problemas com as fetch, em momentos funcionava tudo ok e em outros falhava; Não encontrei o motivo dessa oscilação, invetigarei mais afundo na próxima entrega. Pelo tempo apertado não pude tratar de forma eficiente os fallbacks e os possiveis erros de requisição. Apesar disso, consegui integrar o chatbot ao telegram e por fim, subi o projeto neste repositório e realizei o deploy do mesmo na Heroku;
### Algumas tecnologias usadas:
* [Nodejs](https://nodejs.org/en/): Linguagem utilizada no desenvolvimento da aplicação;
* [Express](https://www.npmjs.com/package/express): Framework que auxiliou no desenvolvimento da API interna;
* [Cross-Fetch](https://www.npmjs.com/package/cross-fetch): API fetch que ajudou nas requisições;
* [Action-on-google](https://www.npmjs.com/package/actions-on-google) : Biblioteca que facilitou criação de ações com o Dialogflow;
* [Axios](https://www.npmjs.com/package/axios): Ferramenta que auxiliou na requisição a Api externa;
* [Cors](https://www.npmjs.com/package/cors): Pacote do node que facilitou o acesso a alguns recursos;
## Como Funciona o Sistema:
O usuário envia uma mensagem através do canal de chat (Telegram, API client, chat teste do próprio dialogflow), o dialogflow interpreta está mensagem e designa a intent que está mais prepara para tratar essa mensagem. A intent chama o webhook do fulfillment que fará uma requisição a api interna. O arquivo [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/blob/denner-basilio-2/index.js), responsável pelo levantamento do sistema, vai ser o primeiro a ser chamado. Index.js passará a requisição para [rotaInternaApi.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/blob/denner-basilio-2/Rotas/rotaInternaApi.js), local que está a rota POST, rota que irá convocar algum arquivo da pasta [Intents](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/tree/denner-basilio-2/Intents) (Pasta que tem os arquivos que tratam as respostas) que de acordo com a intent e os dados fornecidos chamará a função correta para o tratamento da resposta. Caso a função acionada necessite de dados da api externa uma requisição através de uma fetch será feita até [rotaExternaApi.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/blob/denner-basilio-2/Rotas/rotaExternaApi.js), onde se encontra as rotas que com ajuda do axios efetuara uma chamada de dados.

## Como utilizar a Aplicação:
### Localmente(Faz-se necessário ter Nodejs e Ngrok em sua máquina):
1. Clone esse repositório;
2. No terminal do arquivo digite :" **npm install** " para instalar as dependências
3. Novamente no terminal do arquivo digite: " **node index.js** " para iniciar a aplicação
4. Use o [ngrok](https://ngrok.com/) para transformar seu servidor local num servido remoto. Digitando **ngrok http 3000**
5. Adicione "/api/interna" na Url disponibilizada pelo ngrok
6. Insira esta Url em **Dialogflow -> fulfillment -> webhook**
7. Insira nas fetch a Url disponibilizada pelo ngrok, no entanto, de acordo com os endpoint(essas /) das router do [index.js](https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/blob/denner-basilio-2/index.js);
8. E utilize o projeto no canal de conversação de sua escolha.
### Remotamente:
1. Para utilizar remotamente basta você realizar a requisição pela URL : https://projeto-sprint-four-two.herokuapp.com/
2. Lembrando de adicionar os endpoint na url.
### Telegram :
1. Para utilizar via Telegram acesse o link: [t.me/DAviabot_bot](https://t.me/DAviabot_bot)
