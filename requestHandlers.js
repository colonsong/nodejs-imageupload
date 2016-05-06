function start(response, postData)
{
    console.log("Request handler 'start' was called.");
    var body = '<html>'+ '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload(response, postData)
{
    console.log("Request handler 'upload' waws called.");
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.write("do uplaod..." + postData);
    response.end();
    console.log("Request chunk text = " + postData.length);
}

exports.start = start;
exports.upload = upload;