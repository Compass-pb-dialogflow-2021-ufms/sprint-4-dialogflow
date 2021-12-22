# Atividade 2 Sprint 4 - Programa de Bolsas Compass.uol e UFMS

## Diário de bordo
Inicio olhando o design do fluxo de como será a conversa do usuario, e integrando as frases ao console do Dialogflow e uso o template anterior de bot para começar.
Inicializo pelo o fluxo pequeno de ver status do voo onde o usuario deve inserir o flightCode e cpf, utilizo o axios para fazer o post e pego a resposta e formato para exibir os dados mostrados no design de mensagem, que deu tudo certo voltando tudo que precisava. Logo após a daily no periodo a tarde, iniciei o fluxo de fazer check in que consiste quase no mesmo processo mas acresenta o nome completo do usuario. Nesse momento fiz a mesma requisição com o axios.post para a rota /checkin e desta vez a resposta voltada era 500 - Internal Server Error, resolvi testar o fluxo de status de voo e nele agora voltada 500 também, fiquei mais ou menos um 1 dia e meio tentando entender o que poderia ser, troquei os pacotes de requisições para node-fetch e cross-fetch e mesmo assim era voltado o 500 da api. O GET e POST para qualquer outra api estava funcionando mas para a Api da voosCompasso me voltava 500, após mais algumas tentativas e pedidos de ajuda não consegui resolver e por isso esta aplicação está incompleta, apenas com o fluxo de status de voo e check in de voo e não está funcionando suas requests. Termino a jornada de desenvolvimento escrevendo esta documentação e implementando o bot no Telegram.

## Entrega
Para iniciar a aplicação, deve-se possuir o Node.JS na maquina.

1- Na pasta do projeto, abra o terminal e digite npm install para instalar todas as dependencias.

2- Após instalar, digite npm start para iniciar a aplicação.

3- Caso possua o ngrok(https://ngrok.com/download), abra e digite ngrok http 3000, e logo após apareça o link https de onde está hospedado a aplicação.

4- Logo após extraia o zip e importe o bot para o dialogflow na aba de configurações e Export and Import.

5- O bot já deve estar online, copiei e cole o link https feito no ngrok na aba Fulfillment no dialogflow.

6- Pronto, o bot já deve estar pronto para uso!

## Rota e Link do Bot
<li>Link do bot no telegram: t.me/aerobotquenaovoa_bot
<li>Link da api no glitch: https://compassoaerobot.glitch.me/aerobot