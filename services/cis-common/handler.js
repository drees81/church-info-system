'use strict';

module.exports.sites = (event, context, callback) => {

  const siteData = [ 
    { name: 'Lerbeck' },
    { name: 'Meißen' },
    { name: 'Nammen' },
    { name: 'Neesen' }
  ]

  const response = {
    statusCode: 200,
    body: JSON.stringify(siteData)
  }

  callback(null, response);
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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
