const express = require('express');
const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);

const app = express();

const port = process.env.port || 1337;

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

app.all('*', function (req, res) {

    // Previous request info
    var prevReq = req.session.requestInfo;

    // Save current request info
    req.session.requestInfo = `${req.url}, ${req.method}`;

    console.log(`Session ${req.sessionID} previous request: ${prevReq}`);
    res.end(`Previous request: ${prevReq}`);
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});

