module.exports = function (app) {
    app.get('/locations', function (req, res) {
        app.app.controllers.LocationsController.locations(app, req, res);
    });
};