const UsuarioLine = require('../models/usuarioLine')


async function existeIdLine(id)
{
        try
        {
                const usuario = await UsuarioLine.findOne({id: id})
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


module.exports = existeIdLine