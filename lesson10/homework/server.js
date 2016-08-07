var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');

var file = new static.Server('task3.html', {
  cache: 0
});


function accept(req, res) {

	if(req.url == '/calc.js' && req.method == 'POST') {

		var dataObj = {};
		
	    req.on('data', function (data) {
	    	var dataReq = data.toString();
	    	var dataVals = dataReq.split('&');
	    	for (var i = 0; i < dataVals.length; i++) {
	        	var temp = dataVals[i].split("=");
	        	dataObj[temp[0]] = temp[1];
	    	}

	    	calcResult = +dataObj['a'] + +dataObj['b'];

	    });

		req.on('end', function () {
	     //   	for (prop in dataObj) {
	    	// 	console.log(prop + ' - ' + dataObj[prop]);
	    	// }

	    	var calcResult = +dataObj['a'] + +dataObj['b'];

	      	res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(calcResult.toString());
			res.end(); 
	    });
    }

   	file.serve(req, res);
  
}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8081);
} else {
  exports.accept = accept;
}