module.exports = function (app) {

    app.get('/companies', function (req, res) {
        app.app.controllers.CompaniesController.companies(app, req, res);
    });

    app.get('/company', function (req, res) {
        app.app.controllers.CompaniesController.company(app, req, res);
    });
};