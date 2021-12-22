
# Exercício 2 da quarta sprint

Um bot que auxilia o usuário na jornada em uma empresa de aviação, que eu nomeei de Athenas Air lines, sendo o nome do bot Hannah. O bot consegue fazer o checkin, pegar o status de um voo, procurar por um voo, saudar, se despedir e tratar frases que ele não entende.


## Diário de bordo

A maior dificuldade encontrada no projeto foi em relação a API a ser consumida, por retornar status 500, a funcionalidade de procurar por um voo não funciona (ela está codada corretamente, mas não gera retorno algum para o usuário e retorna erros da família 500). Por conta disso, alguns requisitos levantados não foram atingidos, como o de simular a compra, pois muito tempo foi perdido tentando fazer a api funcionar. Tirando isso, estou de certa forma satisfeito com o bot, pois ele me proporcionou novos aprendizados, como trabalhar com eventos e expressões regulares, por exemplo 



## Intenções

- Checkin -> Dado o código do voo, o cpf do cliente e o nome do cliente, consome a API externa e retorna o código de check-in (Só retornou erro 500 durante o tempo que desenvolvi, então não sei se ele retornará corretamente caso a requisição seja um sucesso);

- Fallback Intent -> Por ser um bot com poucas funcionalidades, optei por deixar um fallback único, que informa quando não compreendeu algo e pede para o usuário repetir;

- SecondTimeInFallback -> Caso o usuário envie duas vezes seguidas algo que o bot não compreendeu, Essa intenção é acionada e pergunta se ele deseja ver o menu de ajuda;

- GetSearchFlightParameters -> Essa intenção identifica que o usuário quer buscar uma passagem e gera como retorno um trigger para a intenção SearchFlight;

- SearchFlight -> Essa intenção tem como objetivo recolher corretamente as variáveis necessárias para realizar o search, consumindo a API externa e retornando a resposta para a solicitação (Só retornou erro 500 durante o tempo que desenvolvi, então não sei se ele retornará corretamente caso a requisição seja um sucesso);

- GetStatus -> Recolhe os parametros necessários(código de voo e cpf), consome a API externa e retorna o status do voo em questão;

- Goodbye -> Intenção que se despede do usuário e marca um fim de conversa;

- Help -> Uma intenção que busca elucidar melhor como o usuário pode utilizar o bot ao seu favor, com alguns exemplos para elucidar as funcionalidades;

- KnowAboutMe -> Quando essa intenção é acionada, ela fala qual foi o propósito do bot e fala um pouco sobre o desenvolvedor responsável;

- Welcome -> Cumprimenta o usuário e mostra algumas das possibilidades de ações que ele pode ter.

- Ver principais cotações -> consome duas APIs para mostrar as cotações exigidas no documento   .pdf;

- Há outras intenções, mas elas não possuem grande expressão, pois são de confirmação e negação dentro do contexto.


## Como funciona o bot

Quando ele recebe uma mensagem, o Dialogflow atribui a uma intenção e faz um requisição POST para o backend, que está hospedado na heroku. O backend pega essa requisição, trata fazendo todo o processamento necessário e devolve um json para o DialogFlow, que por sua vez extrai a mensagem a ser enviada ao usuário e a envia.


## Pastas e arquivos

O arquivo na raíz server.js conecta incia o servidor, passando a requisição na rota /compassoVoos para o roteador, que por sua vez extrai a intent e aciona a função necessária para a resposta. Cada função que trata as intenções estão na pasta dialogflow/intencoes. Dentro da pasta dialogflow também temos a pasta modelsResponse, que possui o arquivo respostaMensagem.js, que a partir de uma string, formata ela para poder enviar para o Dialogflow e o arquivo eventTrigger.js que a partir de uma string, formata ela para o DialogFlow acionar uma outra intenção. A pasta modelsAPI possui arquivos contendo os modelos dos posts para a API externa. A pasta auxiliaryFunctions possui um arquivo para formatar o cpf corretamete. 


## Integrações

O bot está integrado com o telegram.


## Execução do programa Remotamente/Canais de comunicação

É possível utilizar o telegram a partir do link: https://t.me/Athenas_Air_lines_bot

Caso queira consumir o weebhook, ele está diponível no link: https://exercicio-1-sprint-4.herokuapp.com/cotacoes


## Execução localmente

-Se faz necessário ter instalado o Node.js e o ngrok
-> Passo a passo instalação Node.js: https://www.youtube.com/watch?v=Wras1X6rBrc
-> Página para a instalação do ngrok: https://ngrok.com/download

1. Abra o link: https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow/tree/horiel-costa-2

2. Selecione o botão verde "Code" e faça o download do arquivo ZIP

3. Extraia os dados do arquivo zipado, o que irá gerar uma pasta chamada "sprint-4-dialogflow-horiel-costa-2"

4. Abra o prompt de comando nessa pasta. O vídeo: https://www.youtube.com/watch?v=NZKpDpHL5Bo mostra como navegar entre pastas e usar o prompt de comando

5. Na pasta, realize o comando "npm install" para obter todas as dependências

6. Após a instalação das dependencias, digite "npm start"

7. Vá para a página de instalação do ngrok e faça o download para o seu sistema operacional

8. Após terminado o download, clique com o botão direito do mouse no arquivo que foi baixado e selecione a opção "Extrair aqui"

9. Volte para a página de instalação do ngrok e clique no "Sign up" que está disponível abaixo de onde foi feito o download.

10. Crie a sua conta e vá no menu "Your Authtoken" no canto superior esquerdo

11. Copie o seu Authtoken e abra um novo prompt de comando navegando até a pasta onde se encontra o ngrok que baixamos e descompactamos

12. Execute o comando "./ngrok authtoken" no prompt de comando, adicionando um espaço e o seu Authtoken. Como por exemplo: ./ngrok authtoken 22FBCMO3g4tr6EhDoHmabZziz3s_6yN8ZC4WBxvaBhZqyapGW

13. Após o comando ter ocorrido com sucesso, escreva "./ngrok http 3000" no prompt de comando e dê um enter

14. Aguarde um pouco e copie a url disponível na segunda aparição da palavra "Forwarding" até antes da seta("->")

15. Abra o coloque em seu navegador a seguinte url: dialogflow.cloud.google.com e faça o login com sua conta google

16. Aceite os termos, clique em "Create Agent" no canto superior esquerdo, dê um nome para o seu agente, e defina a linguagem como pt-bt e o fuso horário no de sua preferência. Após isso, clique em "CREATE", logo ao lado do nome do agente.

17. Aguarde a criação do bot. Após isso, clique na engrenagem no canto superior esquerdo, vá no menu "Export and Import" e clique no botão "RESTORE FROM ZIP" e após isso no botão "SELECT FILE"

18. Selecione o arquivo "Hannah.bot.zip" e clique em "Abrir". Esse arquivo é um dos presentes na pasta "sprint-4-dialogflow-horiel-costa-2" do passo 3.

19. Após isso, digite "RESTORE" na caixa de texto indicada e aperte  botão "RESTORE" e depois em "DONE"

20. Aguarde o carregamento e aperte em "Fulfilment", opção do menu do lado esquerdo da tela

21. Em "Webhook" substitua a url "https://exercicio-1-sprint-4.herokuapp.com/compassoVoos" pela obtida no passo 14 e adicione no final dela "/compassoVoos"

22. Abaixe a tela e clique no botão "Save".

23. Após isso, basta usar o bot no "Try it now", disponível no canto superior direito