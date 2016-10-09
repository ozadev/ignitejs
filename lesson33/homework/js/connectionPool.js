var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Q1w2e3r4',
    database: 'todos'
});

module.exports = pool; 
