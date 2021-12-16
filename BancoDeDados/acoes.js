const usuario = require('../BancoDeDados/tabelas');

module.exports = {
    async buscaUsuario(idUsuario){
        const resultado = await usuario.findOne({idUsuario : `${idUsuario}`}).exec();
        return resultado;
    },
    async adicionarUsuario(req){
        const resultado = await usuario.create(req.body);
        return resultado;
    }
}