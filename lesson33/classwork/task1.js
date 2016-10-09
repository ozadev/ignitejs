const restify = require('restify');

const port = process.env.port || 1337;

const server = restify.createServer({
    name: 'myApp'
});

server.use(function (req, res, next) {
    console.log('method: ' + req.method + ', url: ' + req.url);
    next();
});

server.use(restify.bodyParser({ mapParams: true }));

server.get('/test', function (req, res) {
    console.log(req.headers);
    res.send(req.headers);
});

server.post('/test', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});

server.on('InternalServer', function (req, res, err) {
    console.error('something is wrong!');
    err.body = 'something is wrong!';
    res.send(err);
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});