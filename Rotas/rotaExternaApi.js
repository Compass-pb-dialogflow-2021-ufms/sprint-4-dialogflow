const router = require('express').Router();
const axios = require('axios');


router.post('/search', async (req,res)=>{
   console.log(req.body);
    try {
        const {data} = await axios(`https://compasso-flight.herokuapp.com/api/v1/search`,req.body);
        return res.json(data);
    } catch (erro) {      
        return res.send(
            JSON.stringify({mensagem : erro.message})
        );
    }
});
router.post('/reservation', async (req,res)=>{
    try {
        const {data} = await axios.post(`https://compasso-flight.herokuapp.com/api/v1/reservation`,req.body);
        return res.json(data);
    } catch (erro) {    
        return res.status(404).send(erro.message);
        
    }
});
router.post('/checkin', async (req,res)=>{
    try {
        const {data} = await axios.post(`https://compasso-flight.herokuapp.com/api/v1/checkin`,req.body);
        return res.json(data);
    } catch (erro) {    
        //return res.status(erro.response.status).send(erro.message);
        return res.send(
            JSON.stringify(erro)
        );
    }
});
router.post('/status', async (req,res)=>{
    console.log("req.body");
    console.log(JSON.stringify(req.body));
    try {
        const {data} = await axios.post(`https://compasso-flight.herokuapp.com/api/v1/status`,req.body);
        return res.send(
            JSON.stringify(data)
        );
    } catch (erro) {    
        //return res.status(erro.response.status).send(erro.message);
        return res.send(
            JSON.stringify(erro)
        );
    }
});

module.exports = router;