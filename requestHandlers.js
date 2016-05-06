function start(response)
{
    console.log("Request handler 'start' was called.");
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<input type='text' name='aaa' value='hello'/>");
    response.end();
}
function upload(response)
{
    console.log("Request handler 'upload' waws called.");
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.write("do uplaod...");
    response.end();
}

exports.start = start;
exports.upload = upload;