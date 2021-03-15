module.exports = function (app) {
    app.get('/employees', function (req, res) {
        res.render("employees/createEmp");
    });
};