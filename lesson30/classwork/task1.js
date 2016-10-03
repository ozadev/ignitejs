var express = require('express');
var path = require('path');

var app = express();

var port = process.env.port || 1337;

app.all('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});
