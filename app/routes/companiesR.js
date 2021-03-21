module.exports = function(app){

    app.get('/companies_create', function(req, res){
        app.app.controllers.CompaniesControllers.companies_create(app, req, res);
    });

    app.post('/companies/store', function(req, res){
        app.app.controllers.CompaniesControllers.companies_store(app, req, res);
    });
};