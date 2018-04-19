var http = require("http");

var handleRequest1 = function(req, res) {
	res.end("it werkz. path: " + req.url);
};

var handleRequest2 = function(req, res) {
	res.end("it works!!!! path: " + req.url);
};

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2)


server1.listen(7000, function() {
	console.log("server listening on: http://localhost:7000");
	console.log("you're not ugly");
});

server2.listen(7500, function() {
	console.log("server listening on: http://localhost:7500");
	console.log("you're ugly");
});
