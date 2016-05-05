function route(handle, path)
{
    console.log("route path" + path);
    if(typeof handle[path] === 'function')
    {
        handle[path]();
    }
    else
    {
        console.log("requestHandler function not found, url path: " + path);
    }
}
exports.route = route;