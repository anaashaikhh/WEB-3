1. For that first create the notepad file and add the below code and save it as server.js:

var http = require("http");
http.createServer(function(req,res)
{
     res.writeHead(200,{'Content-Type':'text/html'});
     res.end('Hello World!');
}).listen(8081);


2. Now go to the created file location and open the command prompt or windows power shell and type node myfirst.js, if everything is correct you can see the command prompt as shown below image.
	


3. Now open your browser and type localhost (and port number which we have mentioned in the code)
Note: if 8081 port not working on your machine try changing it to 8082 or 8080



	User Defined Code
1. First create the module that returns the date using below code (save as myfirstmodule.js):
exports.myDateTime = function()
{
return Date();
};


2. Notice that we use ./ to locate the module, that means that the module is located in the same folder as the node.js files. Using module “myfirstmodule” in a Node.js file:
var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res){
res.writeHead (200,{'Content-Type':'text/html'});
res.write("The date and time are currently:" +dt.myDateTime());
res.end();
}).listen(8081);
