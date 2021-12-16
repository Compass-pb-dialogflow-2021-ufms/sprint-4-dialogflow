const express = require('express');
const app = express();
const cors = require('cors');
const routerInternaApi = require('./Rotas/rotaInternaApi');
const routerExternaApi = require('./Rotas/rotaExternaApi');
const routerBD = require('./Rotas/rotaBD');
const conexao = require('./BancoDeDados/conexao');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => console.log("Servidor rodando"));

app.use('/api/interna', routerInternaApi);
app.use('/api/externa', routerExternaApi);
app.use('/api/bd', routerBD);
