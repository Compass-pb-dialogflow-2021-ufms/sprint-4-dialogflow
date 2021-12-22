const axios = require('axios');

module.exports=  {
    

    async welcome() {
        return (`Olá, eu sou o AeroBot, um assistente virtual treinado para auxiliar você em suas viagens aéreas. \n Neste canal você pode buscar por passagens, efetuar a compra de passagem aérea, visualizar o status do seu voo e fazer check-in. O que você deseja?`)
    },

    async fallback() {
        return(`Desculpe, não entendi, poderia repetir?`)
    },

    async help() {
        return(`Neste canal, você pode fazer busca por passagens aéreas, efetuar a compra de passagem, visualizar o status do seu voo e fazer check-in. O que deseja fazer?`)
    },

    async about(){
        return('Eu sou o AeroBot, um assistente virtual programado pelos desenvolvedores de chatbots da Compass Uol!\nFui programado para te ajudar a realizar busca por passagens aéreas, realizar a compra dessas passagens, mostrar os status de algum voo e realizar check-ins. O que deseja fazer?')
    },


    async ticketSearchDestinyCity(req, res) {
        let city = req.body.queryResult.parameters.location.city;
        console.log(city);
        return(`Certo, para ${city}! Agora me diga qual a cidade de destino do voo? Ex: Campo Grande - MS`)
    },

    async ticketSearchNotFound() {
        return(`Ops! Não entendi! Me diga qual a cidade de origem?`)
    }

    
}//chave final