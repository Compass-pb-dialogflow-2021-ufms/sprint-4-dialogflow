const fetch = require('node-fetch');

function consultarCotacao(moedas) {
    return fetch(
            `https://economia.awesomeapi.com.br/last/${moedas}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            }

            throw Error(response);
        })
        .catch((erro) => {
            console.error(erro);
        });
}

module.exports = {
    consultarCotacao
}