var http = require('http');
var util = require('util');
var querystring = require('querystring');

var options = {
	host: "127.0.0.1",
	port: 3000,
	path: "/index.html?name=lupeng"
}
var req = http.get(options,function(res){
	res.setEncoding('utf8');
	var content = '';
	res.on('data',function(data){
		console.log(data);
	});

});