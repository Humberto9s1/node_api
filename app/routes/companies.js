module.exports = function (app) {

    app.get('/companies', function (req, res) {

        var connection = app.config.dbConnection();
        var companiesModel = new app.app.models.CompaniesModel(connection);

        companiesModel.getCompanies(function (error, result) {
            res.render("companies/createComp", {companies : result});
        });
    });

    app.get('/company', function (req, res) {

        var connection = app.config.dbConnection();
        var companiesModel = new app.app.models.CompaniesModel(connection);

        companiesModel.getCompanies(function (error, result) {
            res.render("companies/createCompOne", {company : result});
        });

    });
};