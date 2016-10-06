var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = process.env.port || 1337;

app.use(function(req, res, next) {
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/test.html'));
});

app.post('/test', function(req, res) {
    console.log(`POST req to '/test': ${req.body.data}`);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(req.body.data);
});

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});
