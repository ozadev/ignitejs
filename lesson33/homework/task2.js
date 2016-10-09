const restify = require('restify');
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require('fs');

const apiHandler = require('./js/api_handler');

const port = process.env.port || 1337;

const server = restify.createServer({
    name: 'myApp'
});

// middleware для обработки тела запроса
server.use(restify.bodyParser({ mapParams: true }));

server.use(function (req, res, next) {
    console.log('method: ' + req.method + ', url: ' + req.url);
    next();
});

server.get('/', function (req, res) {
    // Detect if request was ajax
    if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
        apiHandler.loadItems(req, res);
    }
    else {
        fs.readFile(path.join(__dirname, 'pages/index.html'), "utf8", function (err, file) {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err + "\n");
                res.end();
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(file);
            res.end();
        });
    }
});

// создать новый элемент 
server.post('/addItem', apiHandler.createItem);

// обновить элемент по ID 
server.put('/update/:itemID', apiHandler.updateItem);

// удалить элемент по ID 
server.del('/delete/:itemID', apiHandler.removeItem);
 
// обработчик ошибок 
server.on('InternalServer', function(err) {
    err.body = 'oops...error'; 
    res.send(err); 
});

server.listen(port, function () {
    console.log('server running on port ' + port); 
});