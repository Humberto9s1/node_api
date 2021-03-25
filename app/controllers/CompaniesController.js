module.exports.companies_create = function (app, req, res) {
    res.render("companies/createCompanies", { validacao: {}, company: {} });
}

module.exports.companies_store = function (app, req, res) {
    var company = req.body;

    req.assert('fantasy_name', 'Obrigatótio o nome da Empresa').notEmpty();
    req.assert('email', 'Obrigatório se um email valido').notEmpty().isEmail();
    req.assert('cnpj', 'CNPJ obrigatório').notEmpty();
    req.assert('phone_whats', 'WhatsApp obrigatório').notEmpty();
    req.assert('phone_cell', 'Celular obrigatório').notEmpty();
    req.assert('phone_home', 'Fixo obrigatório').notEmpty();
    req.assert('address', 'Endereço obrigatório').notEmpty();
    req.assert('number', 'Numero obrigatório').notEmpty();
    req.assert('zipcode', 'CEP obrigatório').notEmpty();
    req.assert('district', 'Bairro obrigatório').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render("companies/createCompanies", { validacao: errors, company: company });
        return;
    }

    var connection = app.config.dbConnection();
    var companiesModel = new app.app.models.CompaniesModel(connection);

    companiesModel.companyStore(company, function (error, result) {
        res.redirect('/companies');
    });
}

module.exports.companies = function (app, req, res) {
    var connection = app.config.dbConnection();
    var companiesModel = new app.app.models.CompaniesModel(connection);

    companiesModel.getCompanies(function (error, result) {
        res.render("companies/createComp", { companies: result });
    });
}

module.exports.company = function (app, req, res) {
    var connection = app.config.dbConnection();
    var companiesModel = new app.app.models.CompaniesModel(connection);

    var id_company = req.query;

    companiesModel.getCompanies(function (error, result) {
        console.log(result);
        res.render("companies/createCompOne", { company: result });
    });
}