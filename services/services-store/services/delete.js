'use strict';

const dynamodb = require('./dynamodb');
const responseCreator = require('./responseCreator')

module.exports.delete = (event, context, callback) => {

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
  };

  // delete the service from the database
  dynamodb.delete(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t remove the service item.'));
      return;
    }

    callback(null, responseCreator.createOK(result));
  });
};
