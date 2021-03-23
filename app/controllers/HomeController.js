module.exports.dashboards = function (app, req, res) {
    var connection = app.config.dbConnection();
    var CompaniesModel = new app.app.models.CompaniesModel(connection);

    CompaniesModel.get5UltimasCompanies(function(error, result){
        console.log(result);
        res.render("dashboards/createDas",{companies : result});
    });
    
}