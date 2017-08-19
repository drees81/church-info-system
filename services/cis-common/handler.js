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


function getSpecialDayName(day, month) {
  if (month==1 && day==1) {
    return 'Neujahr'
  }
  if (month==12) {
    switch(day) {
      case 24:
        return "Heiligabend";
      case 25:
        return "1. Weihnachtstag";
      case 26:
        return "2. Weihnachtstag";
      case 27:
        return "3. Weihnachtstag";
      case 31:
        return "Altjahresabend";
    }
  }
  return null;
}

function createSpecialDays(start, end) {
  var days = {};
  for (var loopDate=new Date(start.getTime()); loopDate<=end; loopDate.setDate(loopDate.getDate() + 1)) {
    var name = getSpecialDayName(loopDate.getDate(), loopDate.getMonth() +1)
    if (name!=null) {
      var isoDate = loopDate.toISOString().substring(0,10)
      days[isoDate] = {
        name: name,
        date: isoDate
      }
    }
  }
  return days;
}

function createSundays(start, end) {
  var days = {};

  for (var loopDate=new Date(start.getTime()); loopDate<=end; loopDate.setDate(loopDate.getDate() + 1)) {
    if(loopDate.getDay()==0){   //if Sunday
      var isoDate = loopDate.toISOString().substring(0,10)
      days[isoDate] = {
        name: 'Sonntag',
        date: isoDate
      }
    }
  }
  return days;
}

// TODO refactor new owen module
// TODO add moving special days
module.exports.serviceDays = (event, context, callback) => {

  // TODO get from parametes
  var start = new Date('2017-12-01')
  var end = new Date('2017-12-31')

  // create sundays
  var days = createSundays(start, end)

  // create special days
  var specialDays = createSpecialDays(start, end)

  // add special days
  for (var date in specialDays) {
      days[date] = specialDays[date]
  }

  // convert index map to array
  var res = Object.keys(days).map(key => days[key]);

  // sort result by date
  res.sort( (a,b) => (a.date.localeCompare(b.date)));

  callback(null, createOKresponse(res));
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
