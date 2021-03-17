module.exports = function() {
    
    this.getCompanies = function(connection, callback){
        connection.query('select * from companies', callback);
    };
    
    this.getCompany = function(connection, callback){
        connection.query('select * from companies where id = 2', callback);
    };

    return this;
}