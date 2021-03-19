module.exports = function (app) {

    app.get('/company', function (req, res) {

        var connection = app.config.dbConnection();
        var companiesModel = new app.app.models.companiesDAO(connection);

        companiesModel.getCompanies(function (error, result) {
            res.render("companies/createCompOne", {company : result});
        });

    });
};