module.exports = function (app) {
    app.get('/companies', function (req, res) {
        res.render("companies/createComp");
    });
};