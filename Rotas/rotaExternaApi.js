const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req,res)=>{
    try {
        const {data} = await axios(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,JPY-BRL`);
        return res.json(data);
    } catch (erro) {
        return res.send(
            JSON.stringify({mensagem : erro.message})
        );
    }
    
});
router.get('/conversao', async (req,res)=>{
   
    try {
        if(req.query.moeda === undefined ||req.query.moeda === undefined){
            throw new Error(`Codigo moedas invalido`);
        }
        const moeda = req.query.moeda;
        const moeda2 = req.query.moeda2;
        const {data} = await axios(`https://economia.awesomeapi.com.br/last/${moeda}-${moeda2}`);
        return res.json(data);
    } catch (erro) {      
        return res.send(
            JSON.stringify({mensagem : erro.message})
        );
    }

    
});

module.exports = router;