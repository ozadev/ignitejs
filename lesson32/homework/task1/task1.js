const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.port || 1337;

const displayHandler = require('./js/displayHandler');
const insertHandler = require('./js/insertHandler');
const editHandler = require('./js/editHandler');

app.set('views', path.join(__dirname, './pages'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.get('/', displayHandler.displayAllItems);

app.get('/addItem', insertHandler.loadAddPage);
app.post('/addItem', insertHandler.addItem);

app.delete('/delete/:id', editHandler.removeItem);
app.get('/edit/:id', editHandler.itemEditCheck);

app.get('/editItem/:id', editHandler.loadEditPage);
app.put('/editItem/', editHandler.changeItem);

app.use(function(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Page not found!');
});

app.use(function(err, req, res, next) {
    res.status(500).send('oops...something went wrong');
    next(err.stack);
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});