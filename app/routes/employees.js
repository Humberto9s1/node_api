module.exports = function (app) {
    app.get('/employees', function (req, res) {
        app.app.controllers.EmployeesController.employees(app, req, res);
    });
};