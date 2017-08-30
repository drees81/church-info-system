var http = require('http')

function createOptions(method) {
    return {
        postname: 'localhost',
        port: 3000,
        path: '/services',
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

exports.testRequest = function(responseHandler, method, body) {
    var options = createOptions(method)
    var req = http.request(options, responseHandler)
    req.on('error', function(e) {
        console.log('problem with request: ' + e)
    })
    req.write(JSON.stringify(body));
    req.end();
}
