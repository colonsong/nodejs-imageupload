function start()
{
    console.log("Request handler 'start' was called.");
}
function upload()
{
    console.log("Request handler 'upload' waws called.");
}

exports.start = start;
exports.upload = upload;