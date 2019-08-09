const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

//conexão com o banco MONGODB ATLAS
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-h8eo5.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

//para permitir que o react acesse o backend
server.use(cors());
//configuração para usar JSON nas requisições - Padrão
server.use(express.json());
//inicialização das rotas do servidor
server.use(routes);
server.listen(3333);