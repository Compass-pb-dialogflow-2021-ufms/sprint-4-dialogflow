const router = require('express').Router();
const usuario = require('../BancoDeDados/acoes');

router.get('/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const resultado = await usuario.buscaUsuario(id);
        return res.json(resultado);;
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});
router.post('/adicionar', async (req,res) =>{
    try{
        const resultados = await usuario.adicionarUsuario(req);    
        return res.send(
            JSON.stringify(resultados)
        );    
    }catch (erro){
        return res.send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});

module.exports = router;