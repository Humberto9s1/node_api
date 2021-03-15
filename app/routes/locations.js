module.exports = function (app) {
    app.get('/locations', function (req, res) {
        res.render("locations/createLoc");
    });
};