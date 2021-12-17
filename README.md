
# Avaliação Sprint 4 - Programa de Bolsas Compass.uol e UFMS

Segunda sprint do programa de bolsas Compass.uol para formação em chatbot Dialogflow.


## Execução

- Criar BOT em Dialogflow que atenda a necessidade de conversão de moedas;



## Entrega

- Aceitar o convite do repositório da sprint-4-dialogflow;

- Criar uma branch no repositório com o formato nome-sobrenome-numeroEntrega;

- Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida e como utilizar o sistema.

- O prazo de entrega é até às 13h do dia 17/12 no repositório do github (https://github.com/Compass-pb-dialogflow-2021-ufms/sprint-4-dialogflow).

# Especificação do Bot

Desenvolver um chatbot que seja capaz de informar a cotação e fazer a conversão
de valores para outras moedas.

 - Regras de negócio

O chatbot tem que ser muito intuitivo, pois várias pessoas vão utilizar e testar seus
serviços (inclusive pessoas leigas em programação).

Conversão monetária: O bot tem que ser capaz de converter qualquer valor em Real (R$) para as outras moedas obrigatórias.

Conversão de qualquer moeda obrigatória para qualquer moeda obrigatória.

Cotação monetária: Para a cotação, o assistente tem que ser capaz de listar a cotação do Real (R$) em todas as moedas obrigatórias. Exemplo: O Real está cotado
em $ 5,26. Observação: é importante mostrar a última atualização da cotação.

As moedas obrigatórias são:
- Real
- Dólar Americano
- Euro
- Yen
- Bitcoin

O chatbot necessita estar integrado com uma API de cotação de moedas. Aqui vai uma sugestão de API de cotação gratuita: https://docs.awesomeapi.com.br/api-de-moedas

Diferenciar a saudação para usuários que já conversaram anteriormente com o bot.

Por exemplo: “Olá novamente fulano!”.

## Intenções
Abaixo estão intenções que achamos necessárias incluir no chatbot, porém acreditamos que
ainda faltam incluir algumas. 

Na documentação é importante explicar se as intenções abaixo são suficientes e, se incluir novas intenções, explicar o motivo da inclusão.

Aqui estão as intenções obrigatórias:
- Saudação (intenção de boas-vindas)
- Ajuda (por exemplo, mostrar um menu quando o usuário pedir ajuda)
- Quando o assistente não entender alguma coisa

## Canais de comunicação
O chatbot deve ter pelo menos 1 canal de comunicação:
- Telegram;
- Case não consiga Telegram, integrar no canal Line. Caso não possível, utilizar Dialogflow Messenger;

## Bônus

A tarefa bônus não é obrigatória, mas será muito bem vista se for concluída.
- Bônus: Integrar nos canais Telegram, Line e Dialogflow Messenger;

## Documentação
A documentação é um item muito importante em um projeto, portanto, TUDO deve ser documentado. 

Padrão de projeto, arquitetura, intenções, testes, problemas encontrados e suas soluções, etc... 

Descrever detalhadamente cada item.

Seja criativo!

Você tem total liberdade para fazer o projeto da forma que achar melhor. Além disso, fique
à vontade para implementar novas funcionalidades para agregar valor ao sistema.


## Entrega
13:00 - 17/12/2021


----

## Diário de bordo.

A princípio foquei em entender como trabalhar com o payload puro, já que esse era o principal desafio e aprendizado para mim nesse projeto.
Após isso foquei em fazer uma boa estrutura de diretórios para que tudo ficasse bem organizado.

Uma vez estabelecida a comunicação entre a API de consulta e o banco de dados pude focar no fluxo de conversa das intents.

A Default Welcome Intent me despendeu algum tempo já que deveria reconhecer um usuário antigo e para isso fiz um pequeno sistema de cadastro.

As demais intents (Ajuda, Cotação e Conversão) por sua vez foram rápidas e sem grandes dificuldades, exceto pelo detalhe que por conta de uma instabilidade da API de consulta o resultado de operações com Bitcoin não está muito preciso.

Os testes de conversação por sua vez despenderam bastante tempo, e serviram para aprimorar as frases de treinamento do bot.

## Tecnologias

- Express -> Responsável por gerenciar as requisições da aplicação.
- Axios -> Responsável pela comunicação entre a API de consulta.
- Mongoose -> Driver responsavel pela comunicação entra o banco de dados.
- Nodemon -> Ferramentaa utilizada para apoiar no desenvolvimento
- Dotenv -> Responsável por gerenciar as variáveis de ambiente.

## Aplicação

Para realizar qualquer mudança de desenvolvimento será necessario ter <a href="https://nodejs.org/pt-br/">Node</a>.
Então basta clonar o repositório e rodar o comando "npm install".

O padrão de projeto é uma abstração do modelo MVC.

- Pacotes
  - API -> comunicação com a API de consulta.
  - database -> comunicação com o banco de dados.
  - routes -> rotas da aplicação.
  - models -> modelos de entidades.
  - controllers -> controladores de entidades.
  - util -> utilitários.

## Bot

- Intents:

  - Default Welcome Intent -> Mensagem de boas vindas, também responsável por resconhecer o usuário. Caso for o primeiro contato do usuário com o bot, será feito um pequeno cadastro.
  - Default Fallback Intent -> Caso o bot não entenda o que foi falado, seja por erro de digitação ou péla mensagem estar fora de escopo, será retornado uma mensagem que sugestionará o usuário a entrar em na Ajuda Intent.
  - Ajuda Intent -> O bot retorna uma mensagem explicando suas funcionalidades ao usuário.
  - Cotação Intent -> O bot retorna, em reais, a cotação do Dólar, Euro, Iene e Bitcoin.
  - Conversão Intent -> O bot retorna a relação câmbial entre duas moedas, podendo estas serem Real, Dolar, Euro, Iene ou Bitcoin.
  
Um exemplo de uma conversa com o bot é:

    - usuario -> oi
    - bot -> Olá, estou aqui para te ajudar nas converções monetárias.
             
             Mas antes me informe seu nome para que possamos conversar melhor.
    - usuario -> Tiago
    - bot -> Como é sua primeira vez utilizando o sistema vou me introduzir.

             Sou o seu assistente pessoal para cotações e converções monetárias, posso te informar quanto o dólar está valendo hoje por exemplo.
             Mas para verificar com mais detalhes todas minhas funções é so digitar ajuda ou pedir pelo menu.
    - usuario -> Qual a cotação do dolar ?
    - bot -> Tiago a cotação do Dólar Americano está em R$ 5.70.

- Integração
  - O bot está disponivel pelo line, para acessa-lo será preciso ter uma conta no <a ref="https://line.me/en/">LINE</a>. Após a criação de conta você deverá ir em Adicionar amigos -> Perquisar, e procurar pelo código @931ilxyf.