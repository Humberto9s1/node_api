module.exports = function (app) {

    app.get('/companies', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query('select * from companies', function (error, result) {
            res.render("companies/createComp", {companies : result});
        });

    });
};