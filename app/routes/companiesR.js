module.exports = function(app){

    app.get('/companies_store', function(req, res){
        res.render("companies/createCompanies");
    });

    app.post('/companies/store', function(req, res){
        var company = req.body;

        var connection = app.config.dbConnection();
        var companiesModel = app.app.models.companiesModel;
    
        companiesModel.companyStore(company, connection ,function (error, result) {
            res.redirect('/companies');
        });

    });
};