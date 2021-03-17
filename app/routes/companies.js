var dbConnection = require('../../config/dbConnection');
module.exports = function (app) {

    var connection = dbConnection();

    app.get('/companies', function (req, res) {
        connection.query('select * from companies', function (error, result) {
            res.render("companies/createComp", {companies : result});
        });

    });
};