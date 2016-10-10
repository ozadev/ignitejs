const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = process.env.port || 1337;

const namespace = io.of('/namespace');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './pages/index.html'));
});

namespace.on('connection', function (socket) {
    console.log('socket namespace connected');

    // метод send автоматически генерирует событие 'message'
    socket.send({text: 'Hello from namespace'});

    socket.on('receive_message', function() {
        console.log('message received');
    });
});

server.listen(port, function () {
    console.log('app running on port ' + port); 
});