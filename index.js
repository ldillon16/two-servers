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
	var x = Math.floor(Math.random() * 4);
	console.log(arr1[x]);
});

server2.listen(7500, function() {
	console.log("server listening on: http://localhost:7500");
	var x = Math.floor(Math.random() * 5);
	console.log(arr2[x]);
});

var arr1 = ["you're beautiful", "you're smart", "you're cool", "you're driving down the highway, late as can be but you're making it happen!"];

var arr2 = ["you're ugly", "you're stupid", "you're lame", "you're a big dumbass", "you look like crap"];