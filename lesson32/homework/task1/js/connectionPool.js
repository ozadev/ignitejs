const mysql = require('mysql');

const pool = mysql.createPool({
    queueLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Q1w2e3r4',
    database: 'test',
    port: 3306
});

module.exports = pool; 