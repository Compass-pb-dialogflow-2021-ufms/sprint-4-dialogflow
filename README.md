
# Exercício 1 da quarta sprint

Um bot que consegue mostrar as cotações das moedas USD, JPY, BTC e EUR em real, além de conseguir fazer conversões de moedas no geral.


## Diário de bordo

Achei o projeto mais tranquilo que a avaliação da terceira sprint, creio que pela experiência que ganhei nele. A maior dificuldade que tive foi a de gerar pelo menos as conversões das principais moedas para bitcoin, o que foi resolvido através de uma conversão em partes, onde sempre uso a cotação do real em bitcoin para gerar as outras cotações. Tentei seguir um padrão REST ao máximo possível. Decidi fazer um passo a passo para não me perder mais no deploy da heroku e, além disso, tentei deixar as respostas mais complexas dentro do backend e manter o fluxo de conversa intuitivo. Quero me aprofundar mais em eventos, pois nesse projeto acabei usando o hardcode.



## Intenções

- Ajuda -> Uma intenção que busca elucidar melhor como o usuário pode utilizar o bot ao seu favor, com alguns exemplos para elucidar as funcionalidades

- Converter um valor -> Essa intenção vem para fazer as conversões em diferentes moedas, utilizando-se de APIs externas. Utiliza de entidades padrões do sistema para conseguir os parâmetros necessários e, caso não sejam fornecidos, o prompt é acionado para garantir o preenchimento.

- Fallback Intent -> Por ser um bot com poucas funcionalidades, optei por deixar um fallback único, que informa quando não compreendeu algo e sugere o menu de ajuda para o usuário

- Saudação -> Cumprimenta o usuário e diferencia um pouco a mensagem, caso já tenha falado com o bot antes. Caso a req tenha sido feita pelo Telegram, fala até o primeiro nome do usuário. Essa intenção por baixo dos planos também descobre se o usuário está cadastrado e caso não esteja, ela o inclui no BD

- Ver principais cotações -> consome duas APIs para mostrar as cotações exigidas no documento   .pdf.


- Acabei adicionando duas intenções para tentar deixar as responsabilidades bem distribuídas e também para captar com maior precisão o que o usuário deseja. Há outras intenções, mas elas não possuem grande expressão, pois são de confirmação e negação dentro do contexto


## Como funciona o bot

Quando ele recebe uma mensagem, o Dialogflow atribui a uma intenção e faz um requisição POST para o backend, que está hospedado na heroku. O backend pega essa requisição, trata fazendo todo o processamento necessário e devolve um json para o DialogFlow, que por sua vez extrai a mensagem a ser enviada ao usuário e a envia.


## Pastas e arquivos

O arquivo na raíz server.js conecta o banco de dados e incia o servidor, passando a requisição na rota /cotacoes para o roteador, que por sua vez extrai a intent e aciona a função necessária para a resposta. Cada função que trata as intenções estão na pasta dialogflow/intencoes. Dentro da pasta dialogflow também temos a pasta modelsResponse, que possui o arquivo respostaMensagem.js, que a partir de uma string, formata ela para poder enviar para o Dialogflow. A pasta dataBase localizada na raíz possui as funções de achar um usuário e de adicionálo ao BD, além de dois modelos, um para o telegram e outro para o line.



## Integrações

O bot está integrado com o telegram e com o line.


## Execução do programa Remotamente/Canais de comunicação

É possível utilizar o telegram a partir do link: http://t.me/conversorDeMoedas_Bot

No line basta procurar o bot pelo id: @749omqvz e inicias a conversa.

Caso queira consumir o weebhook, ele está diponível no link: https://exercicio-1-sprint-4.herokuapp.com/cotacoes


## Execução localmente

-Se faz necessário ter instalado o Node.js e o ngrok
-> Passo a passo instalação Node.js: https://www.youtube.com/watch?v=Wras1X6rBrc
-> Página para a instalação do ngrok: https://ngrok.com/download

1. Abra o link: https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/tree/horiel-costa-1

2. Selecione o botão verde Code e faça o download do arquivo ZIP

3. Extrai os dados do arquivo zipado (é recomendado fazer dentro de uma pasta para que seja mais fácil de encontrar)

4. Abra o prompt de comando nessa pasta. O vídeo: https://www.youtube.com/watch?v=NZKpDpHL5Bo mostra como navegar entre pastas e usar o prompt de comando

5. Na pasta, realize o comando "npm install" para obter todas as dependências

6. Após a instalação das dependencias, digite "npm start"

7. Abra um novo prompt de comando e navegue até a pasta onde se encontra o ngrok

8. Digite no terminal ./ngrok http 3000

9. Copie a url disponível na segunda palavra "Forwarding" até antes da seta("->")

10. //por questão de tempo, a documentação encerrará aqui, a próxima vai estar um xuxu, confia.