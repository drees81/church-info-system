var should = require('chai').should()
var testRequest = require('./testRequest')
var testData = require('./testData')

describe('api', function() {

    describe('create and delete service', function() {
        it('should create a new service', function(done) {

            function responseHandler(response) {
                response.statusCode.should.equal(201);
                response.setEncoding('utf8');

                response.on('data', function(body) {
                    item = JSON.parse(body);

                    item.should.have.property('id')
                    item.should.have.property('createdAt')
                    item.should.have.property('updatedAt')
                    
                    item.date.should.equal('1900-01-02');
                    item.startTime.should.equal('01:50');
                    item.site.should.equal('Nice Church');
                    item.preacher.should.equal('Someone who can do it');
                    item.helper.should.equal('Whoever wants');
                    item.musician.should.equal('Piano Man');
                    item.communion.should.equal(false);

                    done()
                })
            }
            testRequest.testRequest(responseHandler, 'POST', testData.service1);
        })
    })
})