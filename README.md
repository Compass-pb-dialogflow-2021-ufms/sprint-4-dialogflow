
# Avaliação Sprint 2 - Programa de Bolsas Compass.uol e UFMS

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