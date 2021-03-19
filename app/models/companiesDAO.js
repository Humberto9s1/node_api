function CompaniesDAO(connection) {
    this._connection = connection;
}

CompaniesDAO.prototype.getCompanies = function(callback){
    this._connection.query('select * from companies', callback);
};

CompaniesDAO.prototype.getCompany = function(callback){
    this._connection.query('select * from companies where id = 2', callback);
};

CompaniesDAO.prototype.companyStore = function(company, callback) {
    this._connection.query('insert into companies set ?', company, callback);
};

module.exports = function() {

    return CompaniesDAO;
}