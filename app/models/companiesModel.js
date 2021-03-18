module.exports = function() {
    
    this.getCompanies = function(connection, callback){
        connection.query('select * from companies', callback);
    };
    
    this.getCompany = function(connection, callback){
        connection.query('select * from companies where id = 2', callback);
    };

    this.companyStore = function(company, connection, callback) {
        connection.query('insert into companies set ?', company, callback);
    };

    return this;
}