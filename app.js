var app = require('./config/server');

var routesHome = require('./app/routes/home');
routesHome(app);

app.listen(3000, function(){

    console.log("Servidor ON");

});