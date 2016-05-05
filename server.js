var http = require("http");
var url = require("url");

function startServer(route, handle)
{
    http.createServer(function(request, response)
    {
        console.log("DO REQUEST");
        var urlPath = url.parse(request.url).pathname;
        console.log("url path"  + urlPath);
        route(handle, urlPath);
    
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hollo World");
        response.end(); 
    }).listen(8888);
    console.log("Server Start");
}
exports.start = startServer;

