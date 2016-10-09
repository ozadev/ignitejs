const restify = require('restify');

const port = process.env.port || 1337;

const server = restify.createServer({
    name: 'myApp'
});

var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

server.use(function (req, res, next) {
    console.log('method: ' + req.method + ', url: ' + req.url);
    next();
});

server.use(restify.bodyParser({ mapParams: true }));

server.get('/users', function (req, res) {
    res.json(users);
});

server.post('/users', function (req, res) {
    users.push({name: 'random user', age: 30});
    res.send('Item added');
});

server.put('/users/:index', function (req, res) {
    users[req.params.index] = {name: 'updated name', age: 'updated age'};
    res.send('Item updated');
});

server.del('/users/:index', function (req, res) {
    users.splice(req.params.index, 1);
    res.send('Item removed');
});

server.on('InternalServer', function (req, res, err) {
    console.error('something is wrong!');
    err.body = 'something is wrong!';
    res.send(err);
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});