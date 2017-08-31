var should = require('chai').should()
var request = require('./testRequest').request
var testData = require('./testData')

describe('create a service', function() {
    it('should create a new service', function(done) {
        request('/services', 'POST', testData.service1, (response) => {
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
        })
    })
})
