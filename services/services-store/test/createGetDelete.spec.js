var should = require('chai').should()
var request = require('./testRequest').request
var testData = require('./testData')


describe('Create - Get - Delete - Get', function() {

    var idOfCreatedItem;

    it('should get non existant service by id', function(done) {
        request('/services/xxxx', 'GET', '', (response) => {
            response.statusCode.should.equal(200)
            response.setEncoding('utf8')
        })
    })
        
    it('should create a new service', function(done) {
        // create new service
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

    it('should get the service by id', function(done) {
        // get created service by id
        request('/services/' + idOfCreatedItem, 'GET', '', (response) => {
            response.statusCode.should.equal(200)
            response.setEncoding('utf8')
            response.on('data', function(body) {
                item = JSON.parse(body)
                should.equal(item.id, idOfCreatedItem)
                done()
            })
        })
    })

    it('should delete the service by id', function(done) {
        // get created service by id
        request('/services/' + idOfCreatedItem, 'DELETE', '', (response) => {
            response.statusCode.should.equal(200)
            done()
        })
    })

    it('should not be able to get deleted service', function(done) {
        // get created service by id
        request('/services/' + idOfCreatedItem, 'GET', '', (response) => {
            response.statusCode.should.equal(400)
            done()
        })
    })

})
