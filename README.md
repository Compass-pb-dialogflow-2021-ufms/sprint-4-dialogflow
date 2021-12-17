
# Avaliação Sprint 4 - Programa de Bolsas Compass.uol e UFMS

Segunda sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Dificuldades

 - Encontrei alguns obstáculos nessa nessa atividade, uma delas foi como consumir a api de cotação. Demorei um tempo pra assimilar como eu poderia tratar o objeto que era retornado para exibi-lo como resposta. A aplicação não ficou como eu pensei, gostaria de algo mais dinâmico, pretendo melhorar ela no futuro para desenvolvimento pessoal. 
    Entretanto, tive uma evolução comparada com a última atividade e isso me motiva a continuar no caminho para sempre melhorar como desenvolvedor.  
 
## Funcionamento e tecnologias

- A aplicação dá boas vindas para o usuário, e informa a cotação da moeda que o ususário solicitar. Também é tratado quando o usuário digita algo que o chatbot não compreende. Junto das cotações aparece o horário da última atualização da informação solicitada. Existe um menu de ajuda, caso o usuário não consiga utilizar a ferramenta, basta digitar "ajuda" a qualquer momento.

Primeiramente é necessário que o [Node.JS](https://nodejs.org/en/) e o [Ngrok](https://ngrok.com/) esteja instalado na máquina. 
  
  
  Clone este repositório e no mesmo diretório instale as depenêcias pelo terminal:

  ```node
  npm i express axios consign 
  ```

  - Axios para consumir a api externa
  - Express para tratar das rotas e do servidor
  - Consign para organizar melhor as rotas 



  Após a instalação dos pacotes, ainda no terminal, digite
  ```
  npm start ou node index.js
  ```

  Após ter feito o passo anterior, abra o terminal na pasta onde se encontra o ngrok e digite
```
./ngrok http 3000
  ```
 Copie o segundo endereço "forwarding" gerado no webhook(ele inicia com https) dentro do fulfillmet do bot no DialogFlow.
  
O chatbot também está no [Telegram](https://t.me/quotationchatbot1712bot).



