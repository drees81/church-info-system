var http = require('http')

function createOptions(method, path) {
    return {
        postname: 'localhost',
        port: 3000,
        path: path,
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

exports.request = function(path, method, body, responseHandler) {
    var options = createOptions(method, path)
    var req = http.request(options, responseHandler)
    req.on('error', function(e) {
        console.log('problem with request: ' + e)
    })
    req.write(JSON.stringify(body));
    req.end();
}
