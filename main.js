
//lesson 1
/* Hello, World! program in node.js */
//console.log("Hello, World!")


//lesson 2
var http = require("http");

http.createServer(function(request, response){
    //send the HTTP header
    // HTTP status: 200 : ok
    //Content Type: text/plain
    response.writeHead(200, {"Context-Type":"text/plain"});

    response.end("Hello, World!")

}).listen(8081);


console.log("Server running on localhost:8081");
