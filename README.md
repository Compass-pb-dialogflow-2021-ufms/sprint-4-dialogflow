### Desenvolvimento
No início do projeto tive muita dificuldade em identificar o fluxo da conversa e como realizar as funcionalidades do chatbot, com isso perdi muito tempo de desenvolvimento, mas estudando bem a documentação e tirando dúvidas na daily consegui concretizar o fluxo. Como perdi tempo com a dificuldade anterior acabei não conseguindo implementar todas funcionalidades, como por exemplo a busca por passagem e a reserva. No meu projeto optei por utilizar o mongoDB para criar um cadastro de passageiro e utilizar esse dado no momento de realizar a reserva, apenas consegui implementar o cadastro, o bot consegue identificar (através do cpf informado pelo usuário) se existe ou não um usuário cadastrado, caso não exista ele pergunta ao usuário se deseja se cadastrar. 

Fora essas dificuldades implementei as demais funcionalidades, é possível realizar o check in e verificar o status da passagem.

O projeto esta no heroku, diponivel em https://chatbot-compasso-voos.herokuapp.com/ 
* OBS: Eu implementei o Cadastro depois de ter subido o projeto no heroku, quando fui atualizar essa funcionalidade o heroku estava com instabilidade e não conseguia alterá- la, por tanto é possível que a funcionalidade do cadastro só funciona localmente.

O projeto foi integrado ao Line, disponível com o id @432usfez

### Tecnologias
- nodejs
    - express
    - actions-on-google
    - axios
    - mongoose
- ngrok (testar o dialogflow localmente)
- heroku

### Intents
```
As intents obrigatórias foram implementadas, junto com as que achei necessária como:
- CadastroPassageiro -> captura dados do usuário para realizar o cadastro
- CheckIn -> identifica quando o usuário tem a intenção de realizar o check in
- ConferirCheckIn -> captura o CPF do usuário e o numero do voo para conferir o check in
- ConferirStatus -> captura o CPF do usuário e o numero do voo para verificar o status da passagem
- ConsultarCpf -> captura o CPF do usuário após o usuário ter acionado a intent ReservarPassagem e verifica se o usuário é cadastrado no banco, caso não esteja cadastrado o chatbot pergunta se ele deseja cadastrar
- ConsultarCpfYesFollowup -> caso o usuário deseja cadastrar essa intent captura a resposta positiva da ConsultarCpf e dispara um evento que ativa a intent CadastroPassageiro
- ReservarPassagem -> identifica se o usuário quer fazer uma reserva ou comprar uma passagem
- StatusPassagem -> identifica se o usuário quer verificar o status da passagem
```




