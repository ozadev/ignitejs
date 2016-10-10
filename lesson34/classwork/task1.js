const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.port || 1337;

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("Hello from express and socket.io");
});

server.listen(port, function () {
    console.log('app running on port ' + port); 
});