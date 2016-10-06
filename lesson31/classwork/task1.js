const express  = require('express');
const app = express();

const port = process.env.port || 1337;
const mysql = require('mysql');

const pool = mysql.createPool({
    queueLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Q1w2e3r4',
    database: 'test',
    port: 3306
});

app.use(function(req, res) {

    pool.getConnection(function(err, conn){

        if (err) {
            console.error(err.stack);
            return;
        }

        conn.query('SELECT * FROM `test_table`', function(err, rows) {
            if (err) console.error(err);

            res.status(200)
                .header({'Content-Type': 'text/plain'})
                .send(rows);

            conn.release();
        });

    });

});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});