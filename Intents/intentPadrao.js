
module.exports = {
  fallback() {
    return `Não entendi! Fique atendo aos detalhes do que você precisa  informar e diga novamente!`;
  },
  welcome() {
    return `Olá! eu sou o Aviabot, um assistente virtual treinado para auxiliar você em suas viagens aéreas.
            \nNeste canal você pode buscar por passagens, efetuar a compra de passagem aérea, visualizar os status do seu voo e fazer check-in. O que deseja fazer?`;
  },
  menu() {
    return `Neste Canal, você pode fazer: \n- Busca por passagens aéreas \n- Efetuar a compra de passagem
     \n - Visualizar os status do seu voo \n- Fazer check-in. \nO que deseja fazer?`
  },
  sobremim(){
    return `Eu sou o Aviabot, um assistente virtual programado por um estágiario da Compasso Uol!
    \nFui programado para te ajudar a realizar busca por passagens aéreas, realizar a compra dessas passagens, mostrar os status de  algum voo e realizar check-ins. O que deseja fazer?`
  },
  despedida(){
    return `Foi um prazer realizar seu atendimento!\nSempre que você precisar buscar por passagens, realizar check-ins ou verificar status de um voo fique a vontade para me mandar mensagem!`
  }
}
