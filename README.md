## Diário de bordo.

Em primeiro momento o foco foi criar os diretórios de maneira que coerente e subir uma aplicação. Junto a isso, integrar a aplicação a plataforma do Dialogflow e por sua vez integra-la ao Line, o que foi feito sem grandes dificuldades.

Após isso estabeleci a comunicação com a API de consulta, utilizando o Axios para gerênciar as chamadas para essa API.

Contudo nesse momento surgiu o primeiro problema, para a rota /search sempre é retornada um erro 500, o que impossibilitou o desenvolvimento real para a função de busca de passagens. Para contornar isso foi implementado uma solução que emula o funcionamento correto da API, retornando dados validos ao usuários.

Por fim implementei os outros fluxos de dialogos.

A principal dificuldade que enfrentei foi que para essa entrega eu tentei um approach diferente de desenvolvimento, o que deixou o código mais verboso, longo, o que também consumiu tempo tanto para realização quanto curva de aprendizado. Por conta disso sinto que mtas coisas ficaram defasadas, principalmente se tratando do bot no console. O fato de os dados advindos da funcionalidade buscar passagens serem emulados também foi um problema para mim, já que tive uma trava, demorando a achar um meio de manipular esses dados dentro do código.

## Tecnologias

- Express -> Responsável por gerenciar as requisições da aplicação.
- Axios -> Responsável pela comunicação entre a API de consulta.
- Nodemon -> Ferramentaa utilizada para apoiar no desenvolvimento
- Dotenv -> Responsável por gerenciar as variáveis de ambiente.

## Aplicação

Para realizar qualquer mudança de desenvolvimento será necessario ter <a href="https://nodejs.org/pt-br/">Node</a>.
Então basta clonar o repositório e rodar o comando "npm install".

- Pacotes
    - API -> comunicação com a API de consulta.
    - routes -> rotas da aplicação.
    - controllers -> controladores de entidades.

## Bot

- Intents:

    - Default Welcome Intent -> Mensagem de boas vindas, também responsável por resconhecer o usuário. Caso for o primeiro contato do usuário com o bot, será feito um pequeno cadastro.
    - Default Fallback Intent -> Caso o bot não entenda o que foi falado, seja por erro de digitação ou péla mensagem estar fora de escopo, será retornado uma mensagem que sugestionará o usuário a entrar em na Ajuda Intent.
    - Help Intent -> O bot retorna uma mensagem explicando suas funcionalidades ao usuário.
    - About me Intent -> O bot retorna uma explicação sobre quem é e sua função.
    - Farewell Intent -> O bot manda uma mensagem de despedida e finaliza a conversa.
    - Fluxo para pesquisar passagens (Start Seacrh Intent, Where From Intent, Where To Intent, Departure Date Intent, Return Date Intent) -> O bot retorna uma lista com todas as passagens que se enquadra na descrição dada pelo usuário.
    - Fluxo para reservar passagens (Pre Reservation Intent, Passanger Data Intent, Seats Intents) -> Após ser informado dados pessoais e o usuário escolher a poltronas do voo, o bot faz a reserva e retorna o código do voo para o usuário.
    - Fluxo para realizar checkin (Pre Checkin Intent, Checkin Intent) -> Após informado os dados do usuário e do voo, o bot realiza o checkin e retorna o código de chekin para o usuário.
    - Fluxo para visualizar o status da passagem (Pre Status Intent, Status Intent) -> Após informar os dados do voo e do usuário, o bot retorna as informações da passagem (ida e volta) para o usuário.
    

- Integração
    - O bot está disponivel pelo line, para acessa-lo será preciso ter uma conta no <a href="https://line.me/en/">LINE</a>. Após a criação de conta você deverá ir em Adicionar amigos -> Perquisar, e procurar pelo código @431tncon.