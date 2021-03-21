function CompaniesModel(connection) {
    this._connection = connection;
}

CompaniesModel.prototype.getCompanies = function(callback){
    this._connection.query('select * from companies', callback);
};

CompaniesModel.prototype.getCompany = function(callback){
    this._connection.query('select * from companies where id = 2', callback);
};

CompaniesModel.prototype.companyStore = function(company, callback) {
    this._connection.query('insert into companies set ?', company, callback);
};

module.exports = function() {

    return CompaniesModel;
}