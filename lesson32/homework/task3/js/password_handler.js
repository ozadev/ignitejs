const crypto = require('crypto');
const mysql = require('mysql');
const pool = require('./connectionPool');


module.exports = {
    // хэширование пароля
    encryptPassword: function (password) {
        var hash = crypto.createHmac('sha1', 'abc').update(password).digest('hex'); 
        return hash;
    },
    // проверка пароля 
    getUserPassword: function (username, connection) {

        var sqlTemplate = 'SELECT * FROM `users` WHERE username=?';
        var inserts = [username];
        var sql = mysql.format(sqlTemplate, inserts);

        return connection.query(sql);
    }
}