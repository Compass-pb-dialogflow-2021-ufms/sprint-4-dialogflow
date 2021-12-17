const UsuarioTelegram = require('../models/usuarioTelegram')


async function existeIdTelegram(id)
{
        try
        {
                const usuario = await UsuarioTelegram.findOne({id: id})
                if(usuario == null)
                        return false
                else
                        return true
        }
        catch(erro)
        {
                console.log(erro)
        }
}


module.exports = existeIdTelegram