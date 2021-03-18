module.exports = function(app){

    app.get('/companies_store', function(req, res){
        res.render("companies/createCompanies");
    });
};