'use strict';

function createCORSheaders() {
  return {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
  }
}

function createOKresponse(data) {
  return {
    statusCode: 200,
    headers: createCORSheaders(),
    body: JSON.stringify(data)
  }
}

module.exports.sites = (event, context, callback) => {
  const data = [
    { name: 'Lerbeck', standardServiceStartTime: '09:30' },
    { name: 'Meißen',  standardServiceStartTime: '11:00' },
    { name: 'Nammen',  standardServiceStartTime: '11:00' },
    { name: 'Neesen',  standardServiceStartTime: '09:30' }
  ]

  callback(null, createOKresponse(data));
};

module.exports.preachers = (event, context, callback) => {
  const data = [
    { name: 'Havemann', 'initials': 'CH' },
    { name: 'Folkers',  'initials': 'AF' }
  ]

  callback(null, createOKresponse(data));
};

module.exports.serviceDays = (event, context, callback) => {
  const data = [
    { date: '2017-08-06', name: 'Sonntag' },
    { date: '2017-08-13', name: 'Sonntag' },
    { date: '2017-08-20', name: 'Sonntag' },
    { date: '2017-08-27', name: 'Sonntag' },
  ]

  callback(null, createOKresponse(data));
};


module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    })
  };

  callback(null, response);
};
