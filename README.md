# Chatbot DialogFlow com NodeJS para sistema de reserva, check-in e monitoramento de vôos

## Diário de bordo
Dei inicio ao projeto com o estudo da API a ser consumida. Segui logo com o desenvolvimento básico do servidor e rotas, bem como a implementação de um banco, já que decidi enquanto pensava no projeto que também usaria do recurso implementado na API [Currency Quotation](https://github.com/MashiroK/currency-quotation-api-chatbot) de verificar se o usuário ja teria acessado o sistema. Mantive as práticas desenvolvidas e aprendidas até agora na estruturação do projeto, sem problemas até esse ponto. Meu próximo passo foi criar o projeto no console do DialogFlow, e as intents requeridas para prosseguir no desenvolvimento. Por volta desse ponto, foi notado por um colega que a função de busca da API estava com problemas, e então minha ordem sequencial de desenvolvimento se desestabilizou um pouco. Passei a focar mais nas partes que não requeriam o uso da API, ja que não estavamos certos que o escopo não seria alterado. Conforme o desenvolvimento dessas partes se concluiram, iniciei com a implementação da API, com as rotas de <i>/checkin</i> e <i>/status</i>, e consegui com sucesso fazer a comunicação via axios sem problemas tão grandes. Um ponto de dificuldade que tive foi na implementação de um segundo banco de dados interno para os passageiros, sempre que utilizava dois bancos, os requests enviados pelo dialogflow ao webhook davam timeout, e acabei não tendo o tempo para implementar essa funcionalidade como desejado, então fiquei apenas com a conexão do banco de usuários por plataforma na entrega final. Tanto isso quanto a falta da funcionalidade da rota <i>/search</i> da API impossibilitaram majoritariamente a Intent de compra de passagens, já que não foi possivel iterar sobre o banco de passageiros, nem buscar os vôos com os parâmetros informados pelo usuário, e por exemplo, devolver um preço. Por fim, subi o webhook no NodeJS, bem como fiz a integração também ao telegram, além do line, feita no inicio do desenvolvimento.  

As principais tecnologias empregadas na aplicação são:  
[Express](https://expressjs.com/pt-br/): Framework de gestão de rotas e requisições/respostas.  
[Axios](https://github.com/axios/axios): Ferramenta para acesso aos dados da API via o NodeJS.  
[Mongoose](https://mongoosejs.com): Comunicação com o banco do MongoDB Atlas.  
[Compasso-flight-API](https://compasso-flight.herokuapp.com/api/v1/docs): É a api sugerida para usar no projeto.  

## Documentação

- Aplicação em NodeJS, requer que este esteja instalado na máquina/container utilizado. 
- Faça download/clone do repositório, caso necessário extraia para uma pasta local. Importe o bot para o DialogFlow; Isso pode ser feito ao criar um novo agente no console do DialogFlow, e nas configurações deste acessar "Import and Export" e importar o zip contido no repositório.
- Utilize de uma aplicação como o ngrok para estabelecer conexão com o webhook. Instale e execute o ngrok, crie conta caso necessário. Execute o comando ngrok http 3001, e caso necessário copie o link após "Fowarding" (com final ngrok.io) e cole na página de Fulfillment no console do Dialogflow (Fulfillment -> Webhook -> URL*) com a rota "/webhook" (Ex: 123-456-789.ngrok.io/webhook). Salve no final da página. Alternativamente, utilize o link (https://flight-chatbot-webhook.herokuapp.com/webhook) para executar este.
- Instale as dependências do pacote antes da primeira execução com <b><i>npm install --production</i></b> dentro da pasta raiz.
- Execute o projeto com <b><i>npm start</i></b> dentro da pasta <b>raiz</b> do projeto. Após esses passos, o bot estará em execução, exibindo a mensagem 'Webhook running' como confirmação. É possível executar o bot no painel direito, ou integrar com algum serviço. Para fazer a integração, siga os passos especificados no Console do DialogFlow.

## Integração
  
- O bot está integrado com o LINE, e para acessar ele, é necessário entrar no aplicativo e procurar pelo ID @435blild
- O bot também tem integração com o Telegram, que pode ser acessada via [este link](t.me/FlightChatbot)
- Por fim, o deploy do webhook está hospedado em https://flight-chatbot-webhook.herokuapp.com/webhook e aceita operações de POST para o chatbot via DialogFlow.