'use strict';

const dynamodb = require('./dynamodb');
const responseCreator = require('./responseCreator')

module.exports.list = (event, context, callback) => {
	
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  // fetch all services from the database
  dynamodb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the services.'));
      return;
    }

    callback(null, responseCreator.createOK(result.Items));
  });
};
