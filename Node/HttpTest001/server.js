var http = require('http');
var util = require('util');
var url = require('url');
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	res.writeHeader(200,{"content-type":"text/html"});
	res.write("Welcome to visit the http server!");
	res.end("你的请求已经收到：" + query);
}).listen(3000);
console.log("The Server is littening at port 3000");