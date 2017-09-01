'use strict';

const dynamodb = require('./dynamodb');

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeValues: {
      ':updatedAt': timestamp,
      ':isodate': data.isodate,
      ':startTime': data.startTime,
      ':site': data.site,
      ':preacher': data.preacher,
      ':helper': data.helper,
      ':musician': data.musician,
      ':communion': data.communion
    },
    UpdateExpression: 'SET updatedAt = :updatedAt, isodate = :isodate, startTime = :startTime, site = :site, preacher = :preacher, helper = :helper, musician = :musician, communion = :communion',
    ReturnValues: 'ALL_NEW',
  };

  dynamodb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t update the service.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};
