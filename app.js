var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send("<html><body>Sistema de Locação</body></html>");
});

app.get('/equipments', function(req, res){
    res.send("<html><body>Cadastro de Equipamentos</body></html>");
});

app.listen(3000, function(){

    console.log("Servidor Rodando com Sucesso");

});