var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("dashboards/createDas");
});

app.get('/companies', function(req, res){
    res.render("companies/createComp");
});

app.get('/employees', function(req, res){
    res.render("employees/createEmp");
});

app.get('/locations', function(req, res){
    res.render("locations/createLoc");
});

app.listen(3000, function(){

    console.log("Servidor Rodando com Sucesso");

});