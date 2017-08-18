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


function createSundays(start, end) {
  var sundays = [];

  var loopDate = new Date(start);
  var endDate = new Date(end);
  
  while (loopDate <= endDate) {
    if(loopDate.getDay()==0){   //if Sunday
      sundays.push(new Date(loopDate.getTime()));
    }
    loopDate.setDate(loopDate.getDate() + 1);
  }
  return sundays;
}

module.exports.serviceDays = (event, context, callback) => {

  // TODO get from parametes
  var startDate = '2017-12-01'
  var endDate = '2017-12-31'

  // create sundays
  var result = createSundays(startDate, endDate).map(function(obj){
    return {
      'date': obj.toISOString().substring(0,10),
      'name': 'Sonntag'
    }
  });

  // create special days

  // merge sundays and special days

  callback(null, createOKresponse(result));
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
