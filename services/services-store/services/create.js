'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');

function createCORSheaders() {
  return {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
  }
}

function createOKresponse(data) {
  return {
    statusCode: 201,
    headers: createCORSheaders(),
    body: JSON.stringify(data)
  }
}

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime()
  const data = JSON.parse(event.body);
  if (typeof data.isodate !== 'string') {
    console.error('Validation Failed');
    callback(new Error('Couldn\'t create new service.'));
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v4(),
      createdAt: timestamp,
      updatedAt: timestamp,

      isodate: data.isodate,
      startTime: data.startTime,
      site: data.site,
      preacher: data.preacher,
      helper: data.helper,
      musician: data.musician,
      communion: data.communion
    },
  };

  // write the service to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create the service item.'));
      return;
    }

    callback(null, createOKresponse(params.Item));
  });
};
