const UsuarioLine = require('../models/usuarioLine')


async function adicionarUsuarioLine(id)
{
        const usuario = {id}

        try
        {
                await UsuarioLine.create(usuario)          
        }
        catch(erro)
        {
                console.log(erro)
        }
}


module.exports = adicionarUsuarioLine