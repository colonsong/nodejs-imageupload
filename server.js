var http = require("http");
var url = require("url");

function startServer(route, handle)
{
    http.createServer(function(request, response)
    {
        console.log("DO REQUEST");
        var urlPath = url.parse(request.url).pathname;
        console.log("url path"  + urlPath);
        
        // 開始接受請求資料
        var postData  = "";
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("get post chunk data: " + postDataChunk );
        });
        
        request.addListener("end", function(){
           route(handle, pathname, response, postData); 
        });
        // 接收資料END
        route(handle, urlPath, response);
    }).listen(8888);
    console.log("Server Start");
}
exports.start = startServer;

