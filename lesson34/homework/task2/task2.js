const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = process.env.port || 1337;

const chatSocket = io.of('/chat');

// массив для хранения текущих подключений
var connections = [];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './pages/index.html'));
});

chatSocket.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    socket.on('send_message', function(data) {
        // console.log(data);
        chatSocket.emit('chat_message', data);
    });

    socket.on('disconnect', function () {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    })
});

server.listen(port, function () {
    console.log('app running on port ' + port); 
});