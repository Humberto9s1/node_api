var app = require('./config/server');

var routesHome = require('./app/routes/home');
routesHome(app);

var routesLocations = require('./app/routes/locations')(app);

var routesCompanies = require('./app/routes/companies')(app);

var routesEmployees = require('./app/routes/employees')(app);

app.listen(3000, function(){

    console.log("Servidor ON");

});