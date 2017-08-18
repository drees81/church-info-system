var should = require('chai').should();

var handler = require('../handler.js');

describe('common', function() {

    describe('getSite', function() {
        it('should return a list of sites', function(done) {

            event = {};
            handler.sites(event, context, (xx, response) => {
                response.statusCode.should.equal(200);

                response.headers['Access-Control-Allow-Origin'].should.equal('*');             
                response.headers['Access-Control-Allow-Credentials'].should.equal(true);             

                message = JSON.parse(response.body);

                item = message[0];
                item.should.have.property('name');
                item.should.have.property('standardServiceStartTime');
                done();
            });
        });
    });

    describe('getPreachers', function() {
        it('should return a list of preachers', function(done) {

            event = {};
            handler.preachers(event, context, (xx, response) => {
                response.statusCode.should.equal(200);

                response.headers['Access-Control-Allow-Origin'].should.equal('*');             
                response.headers['Access-Control-Allow-Credentials'].should.equal(true);             

                message = JSON.parse(response.body);

                item = message[0];
                item.should.have.property('name');
                item.should.have.property('initials');
                done();
            });
        });
    });
})

describe('calculated', function() {

    describe('getServiceDays - basic', function() {
        it('should return a list of potential service days - basic', function(done) {

            event = {};
            handler.serviceDays(event, context, (xx, response) => {
                response.statusCode.should.equal(200);

                response.headers['Access-Control-Allow-Origin'].should.equal('*');             
                response.headers['Access-Control-Allow-Credentials'].should.equal(true);             
                done();
            });
        });

        it('should return a list of potential service days - sundays', function(done) {

            event = {};
            handler.serviceDays(event, context, (xx, response) => {
                message = JSON.parse(response.body);

                message[0].date.should.equal('2017-12-03')
                message[0].name.should.equal('Sonntag')
                message[1].date.should.equal('2017-12-10')
                message[1].name.should.equal('Sonntag')
                message[2].date.should.equal('2017-12-17')
                message[2].name.should.equal('Sonntag')
                done();
            });
        });

        it('should return a list of potential service days - special days', function(done) {
            done(); // test temporarily disabled
            
            event = {};
            handler.serviceDays(event, context, (xx, response) => {
                message = JSON.parse(response.body);

                message[3].date.should.equal('2017-12-24')
                message[3].name.should.equal('Heilig Abend')
                message[4].date.should.equal('2017-12-25')
                message[4].name.should.equal('1. Weihnachtstag')
                message[5].date.should.equal('2017-12-26')
                message[5].name.should.equal('2. Weihnachtstag')
                message[6].date.should.equal('2017-12-27')
                message[6].name.should.equal('3. Weihnachtstag')
                message[7].date.should.equal('2017-12-31')
                message[7].name.should.equal('Altjahresabend')
                done();
            });
        });

    });

});
