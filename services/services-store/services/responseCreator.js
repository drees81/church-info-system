
function createCORSheaders() {
  return {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
  }
}

exports.createOK = function(data) {
  return this.create(200, data)
}

exports.create = function(errorCode, data) {
  return {
    statusCode: errorCode,
    headers: createCORSheaders(),
    body: JSON.stringify(data)
  }
}
