var http = require('http');
var port = process.env.port || 1337;

http.createServer(function (req, res) {

    console.log(req.method);
    console.log(req.url);

    if (req.method == 'GET' && req.url == '/test') {
        console.log('It\'s GET request with \'/test\' url ==> json sent');
        res.end(JSON.stringify({message: "Hello World!"}));
        return;
    }

    // Browser wait responce
    res.end();

}).listen(port);

console.log('server running on port ' + port);



