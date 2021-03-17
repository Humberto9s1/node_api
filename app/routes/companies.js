module.exports = function (app) {

    app.get('/companies', function (req, res) {

        var connection = app.config.dbConnection();
        var companiesModel = app.app.models.companiesModel;

        companiesModel.getCompanies(connection, function (error, result) {
            res.render("companies/createComp", {companies : result});
        });
    });
};