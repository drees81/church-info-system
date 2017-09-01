var should = require('chai').should()
var request = require('./testRequest').request
var testData = require('./testData')


describe('List - Create - List - Delete - List', function() {

    var idOfCreatedItem
    var initialItemCount

    it('should get a list of services', (done) => {
        request("/services", 'GET', {},  (response) => {
            response.statusCode.should.equal(200);
            response.setEncoding('utf8')
            response.on('data', (body) =>{
                item = JSON.parse(body)
                item.should.be.an('array')
                initialItemCount = item.length
                done()
            })
        })
    })
        
    it('should create a new service', (done) => {
        request("/services", 'POST', testData.service1, (response) => {
            response.statusCode.should.equal(201);
            response.setEncoding('utf8');
            response.on('data', function(body) {
                item = JSON.parse(body)
                idOfCreatedItem = item.id
                done()
            })
        })
    })

    it('should get a list of services with element count +1', (done) => {
        request("/services", 'GET', {}, (response) => {
            response.statusCode.should.equal(200);
            response.setEncoding('utf8')
            response.on('data', (body) =>{
                item = JSON.parse(body)
                item.length.should.equal(initialItemCount+1)
                done()
            })
        })
    })

    it('should delete the service by id', (done) => {
        // get created service by id
        request('/services/' + idOfCreatedItem, 'DELETE', {}, (response) => {
            response.statusCode.should.equal(200)
            done()
        })
    })

    it('should get a list of services with initial element count', (done) => {
        request("/services", 'GET', {}, (response) => {
            response.statusCode.should.equal(200);
            response.setEncoding('utf8')
            response.on('data', (body) =>{
                item = JSON.parse(body)
                item.length.should.equal(initialItemCount)
                done()
            })
        })
    })

})
