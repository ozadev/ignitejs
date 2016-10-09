const express  = require('express');
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);

const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.port || 1337;

const pool = require('./js/connectionPool');
const passwordHandler = require('./js/password_handler');

const sessionStore = new mySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Q1w2e3r4',
    database: 'session_test',
    checkExpirationInterval: 900000,
    expiration: 86400000
});

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store: sessionStore
}));

app.set('views', path.join(__dirname, './pages'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', {user: req.session.user});
});

app.get('/signUp', function(req, res) {
    res.render('signUp');
});

app.get('/login', function(req, res) {
    res.render('login');
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

app.post('/login', function (req, res) {

    var logSuccess = false;

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        var query = passwordHandler.getUserPassword(req.body.login, connection);

        query.on('end', function () {
            if (!logSuccess) {
                res.status(404).send('wrong username or password');
            }
            else {
                res.redirect('/');
            }
            connection.release();
        });

        query.on('result', function (row) {

            if (row === undefined) {
                return;
            }

            if (row.passwordHash === passwordHandler.encryptPassword(req.body.password)) {
                logSuccess = true;
                req.session.user = req.body.login;
            }

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