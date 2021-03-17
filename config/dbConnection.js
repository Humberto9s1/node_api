var mysql = require('mysql');

var connMysql = function() {

    console.log('Conexão com o db foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'gaia'
    });
    
}

module.exports = function () {
    console.log('O autoload carregou o modulo de conexão com o banco de dados');
    return connMysql;
};