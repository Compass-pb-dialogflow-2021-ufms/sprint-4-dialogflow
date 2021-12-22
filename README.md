
# Avaliação Sprint 4.2 - Programa de Bolsas Compass.uol e UFMS

Segunda sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.

## Diário de bordo

Não consegui desenvolver o que eu espera nessa atividade, mais por conta das minhas decisões. Busquei seguir o fluxo de conversa do Miro (me confundi bastante no tratamento das entidades) demorei muito para assimilar o funcionamento do contexto e dos follow-ups no console do Dialogflow. 
    Quanto a API, não consegui receber as respotas esperadas exibidas na documentação. Sabido que o /search não estava funcionando, tentei implementar as outras funcionalidas, o /status só retornava o erro 500 - Internal Server Error, o mesmo ocorreu no /checkin. Tentei implementar utilizando o axios, não sei se a causa desses erros foi um problema na minha máquina ou da própria api. Enfim, fica a experiência para as próximas tarefas. 

## Funcionamento e tecnologias

- A aplicação dá boas vindas para o usuário, e passa informações para o usuário sobre o funcionamento. Por conta do que já foi descrito anteriormente, apenas a funcionalidade de busca de pasagens está parcialmente implementada conforme fluxo de conversa que foi disponibilizado.
 
Primeiramente é necessário que o [Node.JS](https://nodejs.org/en/) e o [Ngrok](https://ngrok.com/) esteja instalado na máquina. 
  
  
  Clone este repositório e no mesmo diretório instale as depenêcias pelo terminal:

  ```
  npm install
  ```

  - Axios para consumir a api externa
  - Express para tratar das rotas e do servidor
  - Consign para organizar melhor as rotas 



  Após a instalação dos pacotes, ainda no terminal, digite
  ```
  npm start 
  ```

  Após ter feito o passo anterior, abra o terminal na pasta onde se encontra o ngrok e digite
```
./ngrok http 3000
  ```
 Copie o segundo endereço "forwarding" gerado no webhook(ele inicia com https) dentro do fulfillmet do bot no DialogFlow.

 Integrei o chatbot ao Dialogflow Message, para executa-lo basta executar o live server no arquivo index.html que está na raiz do projeto.