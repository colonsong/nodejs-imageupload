function route(handle, path, response, postData)
{
    console.log("route path" + path);
    if(typeof handle[path] === 'function')
    {
        handle[path](response, postData);
    }
    else
    {
        console.log("requestHandler function not found, url path: " + path);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}
exports.route = route;