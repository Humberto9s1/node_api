module.exports = function (app) {

    app.get('/company', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query('select * from companies where id = 2', function (error, result) {
            res.render("companies/createCompOne", {company : result});
        });

    });
};