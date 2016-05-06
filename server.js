var http = require("http");
var url = require("url");

function startServer(route, handle)
{
    http.createServer(function(request, response)
    {
        console.log("DO REQUEST");
        var urlPath = url.parse(request.url).pathname;
        console.log("url path"  + urlPath);
        route(handle, urlPath, response);
    }).listen(8888);
    console.log("Server Start");
}
exports.start = startServer;

