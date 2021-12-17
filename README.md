# Avaliação 1 Sprint 4 - Programa de Bolsas Compass.uol e UFMS

## Diário de bordo
Iniciei pensando no fluxo que uma conversa de usuario iria precisar, então comecei com as intents iniciais de saudação de onde o usuario poderia começar e tentar guia-lo e nas entities de moedas obrigatórias. Logo após, fui descobrir um jeito de fazer o request da api aqui no codigo, então descobri o axion que faz esse request de uma api para você e traz todos os dados em apenas algumas linhas de codigo, segui utilizando a api de recomendação que achei muito boa até certo ponto, ela é muito boa e facil de compreensão em seus requests o que trouxe facil entendimento na hora de não se perder nas moedas obrigatorias mas encontrei dois impasses que foram afetados na aplicação já que usei só esta api. O primeiro foi o bitcoin e sua conversão que só funciona desse unico jeito que é Bitcoin para dolar, euro e real no qual está presente na aplicação mas não contempla o objetivo da atividade. O segundo foi valores da alta do iene estarem voltando acima da virgula inicial em casos de dolar e euro (ex: o que é:"0.8805", o que deveria ser: "0,0088"), o que foi implementado na aplicação e vai aparecer errado na hora de conversões de yen para dolar e euro. Adiante foi implementar a opção de listar as ultimas cotações do real nas moedas obrigatorias que foi absolutamente tranquilo e sem complicações. Seguimos com uma adição do menu ajuda que foi feito pra guiar usuarios até a funcionalidade desejada, e depois foi feito a funcionalidade de guardar e lembrar do usuario no telegram, onde tive a ajuda do colega Horiel que me auxiliou e tornou a tarefa muito mais facil. Logo adiante temos a integração com os serviços o telegram, dialogflow messenger e line que foram tranquilos e de facil execução.

## Entrega
Para iniciar a aplicação, deve-se possuir o Node.JS na maquina.
1- Na pasta do projeto, abra o terminal e digite npm install para instalar todas as dependencias.
2- Após instalar, digite npm start para iniciar a aplicação.
3- Caso possua o ngrok(https://ngrok.com/download), abra e digite ngrok http 3000, e logo após apareça o link https de onde está hospedado a aplicação.
4- Logo após extraia o zip e importe o bot para o dialogflow na aba de configurações e Export and Import.
5- O bot já deve estar online, copiei e cole o link https feito no ngrok na aba Fulfillment no dialogflow.
6- Pronto, o bot já deve estar pronto para uso!

## Rota e Link do Bot
<li>Link do bot no telegram: t.me/dindinconvert_bot
<li>Link do bot no line: https://line.me/R/ti/p/%40431vbivf#~
<li>Link do dialogflow messenger no glitch: https://dindinddialogflowmessenger.glitch.me/
<li>Link da api no glitch: https://dinheirinhobot.glitch.me/dinheirobot 