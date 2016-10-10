const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = process.env.port || 1337;

const chatSocket = io.of('/chat');

// массив для хранения текущих подключений
var connections = [];
// массив для хранения текущих пользователей
var users = [];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './pages/auth.html'));
});

app.get('/:id', function (req, res) {
    if (req.params.id == 'favicon.ico') {
        res.sendStatus(404);
    }
    else {
        users.push(req.params.id);
        res.sendFile(path.join(__dirname, './pages/index.html'));
    }
});

chatSocket.on('connection', function (socket) {
    connections.push(socket);
    console.log(`User '${users[users.length - 1]}' connected: ${connections.length} sockets connected`);

    socket.on('send_message', function(data) {
        chatSocket.emit('chat_message', data);
    });

    socket.on('disconnect', function () {
        var disconnectIndex = connections.indexOf(socket);
        connections.splice(disconnectIndex, 1);
        var disconnectUser = users.splice(disconnectIndex, 1);

        chatSocket.emit('users_online', { users: users });
        console.log(`User '${disconnectUser[0]}' disconnected: ${connections.length} sockets connected`);
    });

    socket.on('load_users', function () {
        chatSocket.emit('users_online', { users: users })
    });

    socket.emit('user_current', { name: users[users.length - 1] });
});

server.listen(port, function () {
    console.log('app running on port ' + port); 
});