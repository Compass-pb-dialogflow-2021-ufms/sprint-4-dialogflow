const UsuarioTelegram = require('../models/usuarioTelegram')


async function adicionarUsuarioTelegram(id, nome)
{
        const usuario = {id, nome}

        try
        {
                await UsuarioTelegram.create(usuario)          
        }
        catch(erro)
        {
                console.log(erro)
        }
}


module.exports = adicionarUsuarioTelegram