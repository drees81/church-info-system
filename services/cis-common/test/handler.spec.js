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

    describe('getServiceDays', function() {
        it('should return a list of potential service days', function(done) {

            event = {};
            handler.serviceDays(event, context, (xx, response) => {
                response.statusCode.should.equal(200);

                response.headers['Access-Control-Allow-Origin'].should.equal('*');             
                response.headers['Access-Control-Allow-Credentials'].should.equal(true);             

                message = JSON.parse(response.body);

                item = message[0];
                item.should.have.property('date');
                item.should.have.property('name');
                done();
            });
        });
    });

});
