const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = process.env.port || 1337;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './pages/index.html'));
});

io.on('connection', function (socket) {
    console.log('socket connected');

    socket.emit('greet', {text: 'Hello from Socket.IO'});

    socket.on('receive_message', function() {
        console.log('message received');
    });
});

server.listen(port, function () {
    console.log('app running on port ' + port); 
});