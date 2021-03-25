function CompaniesModel(connection) {
    this._connection = connection;
}

CompaniesModel.prototype.getCompanies = function(callback){
    this._connection.query('select * from companies', callback);
};

//TODO:where nao esta trazendo o resultado específico, e sim trazendo todos os registros
CompaniesModel.prototype.getCompany = function(callback){
    this._connection.query('select * from companies where id = 3', callback);
};

CompaniesModel.prototype.companyStore = function(company, callback) {
    this._connection.query('insert into companies set ?', company, callback);
};

CompaniesModel.prototype.get5UltimasCompanies = function(companies, callback) {
    this._connection.query('select * from companies order by id desc limit 5 ', companies, callback);
};

module.exports = function() {

    return CompaniesModel;
}