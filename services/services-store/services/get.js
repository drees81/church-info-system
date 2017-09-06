'use strict';

const dynamodb = require('./dynamodb');
const responseCreator = require('./responseCreator')

module.exports.get = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  // fetch service from the database
  dynamodb.get(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the service item.'));
      return;
    }

    if (result.Item) {
      var statusCode = 200 
    } else {
      var statusCode = 404 
    }
    
    callback(null, responseCreator.create(statusCode, result.Item));
  });
};
