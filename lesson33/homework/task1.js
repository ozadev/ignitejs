const restify = require('restify');
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require('fs');

const port = process.env.port || 1337;

const server = restify.createServer({
    name: 'myApp'
});

var todos = [
    { id: 1, name: 'Work', description: 'Stuff to do' }, { id: 2, name: 'Walk the dog', description: 'Need to get up early' },
    { id: 3, name: 'Finish project', description: 'An important task' }, { id: 4, name: 'Earn a lot of money', description: 'As soon as possible' },
    { id: 5, name: 'Go to sleep', description: 'late at night'}
];

// middleware для обработки тела запроса
server.use(restify.bodyParser({ mapParams: true }));

server.use(function (req, res, next) {
    console.log('method: ' + req.method + ', url: ' + req.url);
    next();
});

server.get('/', function (req, res) {
    // Detect if request was ajax
    if (req.headers['x-requested-with'] == 'XMLHttpRequest') {
        res.json(todos);
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
server.post('/addItem', function(req, res) {

    var nextId = 1;

    if (todos.length)
        var nextId = Math.max.apply(null, todos.map((item) => item.id)) + 1;

    todos.push({
        id: nextId,
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    });
    res.send('Item created');
});

// обновить элемент по ID 
server.put('/update/:itemID', function(req, res) {
    var itemIndex;
    todos.forEach((item, index) => {
        if (item.id == req.params.itemID) {
            itemIndex = index;
        }
    });

    if (itemIndex !== undefined) {
        todos[itemIndex].name = req.body.name;
        todos[itemIndex].description = req.body.description;
        todos[itemIndex].completed = req.body.completed;

        res.send('Item updated');
    }
    else {
        res.send('No item with such id');
    }
});

// удалить элемент по ID 
server.del('/delete/:itemID', function(req, res) {
    var itemIndex;
    todos.forEach((item, index) => {
        if (item.id == req.params.itemID) {
            itemIndex = index;
        }
    });

    todos.splice(itemIndex, 1);

    res.send('Item removed');
});
 
// обработчик ошибок 
server.on('InternalServer', function(err) {
    err.body = 'oops...error'; 
    res.send(err); 
})

server.listen(port, function () {
    console.log('server running on port ' + port); 
});