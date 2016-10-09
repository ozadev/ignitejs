const express  = require('express');
const app = express();
const mysql = require('mysql');

const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.port || 1337;

const pool = require('./js/connectionPool');
const passwordHandler = require('./js/password_handler');

app.set('views', path.join(__dirname, './pages'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.redirect('/signUp');
});

app.get('/signUp', function(req, res) {
    res.render('signUp');
});

app.post('/signUp', function (req, res) {

    var passwordHash = passwordHandler.encryptPassword(req.body.password);

    var newUser = {
        username: req.body.login,
        passwordHash: passwordHash
    };

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        var sqlTemplate = 'INSERT INTO `users` (username, passwordHash) VALUES (?, ?)';
        var inserts = [newUser.username, newUser.passwordHash];
        var sql = mysql.format(sqlTemplate, inserts);

        connection.query(sql, function (err) {
            if (err) throw err;

            console.log(`New user "${newUser.username}" added to database`);

            res.redirect('/');

            connection.release();
        });

    });
});

app.use(function(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Page not found!');
});

app.use(function(err, req, res, next) {
    res.status(500).send('oops...something went wrong');
    next(err.stack);
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});