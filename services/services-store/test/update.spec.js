var should = require('chai').should()
var request = require('./testRequest').request
var testData = require('./testData')

describe('create and update a service', function() {

    var idOfCreatedItem
    var updatedAt
    var createdAt
   
    it('should create a new service', (done) => {
        request('/services', 'POST', testData.service1, (response) => {
            response.statusCode.should.equal(201)
            response.setEncoding('utf8')
            response.on('data', function(body) {
                item = JSON.parse(body)
                
                idOfCreatedItem = item.id
                updatedAt = item.updatedAt
                createdAt = item.createdAt
                done()
            })
        })
    })

        it('should get original values before update', function(done) {
        request('/services/' + idOfCreatedItem, 'GET', '', (response) => {
            response.statusCode.should.equal(200)
            response.setEncoding('utf8')
            response.on('data', function(body) {
                item = JSON.parse(body)
                should.equal(item.id, idOfCreatedItem)
                should.equal(item.createdAt, createdAt)
                should.equal(item.updatedAt, updatedAt)

                item.isodate.should.equal('1900-01-02')
                item.startTime.should.equal('01:50')
                item.site.should.equal('Nice Church')
                item.preacher.should.equal('Someone who can do it')
                item.helper.should.equal('Whoever wants')
                item.musician.should.equal('Piano Man')
                item.communion.should.equal(false)
                done()
            })
        })
    })

    it('should update a service', (done) => {
        request('/services/' + idOfCreatedItem, 'PUT', testData.serviceUpdate, (response) => {
            response.statusCode.should.equal(200)
            response.setEncoding('utf8')
            response.on('data', function(body) {
                item = JSON.parse(body)
                
                idOfCreatedItem = item.id

                item.should.have.property('id')
                item.should.have.property('createdAt')
                item.should.have.property('updatedAt')
                
                item.isodate.should.equal('1990-12-24')
                item.startTime.should.equal('18:00')
                item.site.should.equal('Other Church')
                item.preacher.should.equal('Man of God')
                item.helper.should.equal('none')
                item.musician.should.equal('Organ Man')
                item.communion.should.equal(true)
                done()
            })
        })
    })

    it('should get the updated values', function(done) {
        request('/services/' + idOfCreatedItem, 'GET', '', (response) => {
            response.statusCode.should.equal(200)
            response.setEncoding('utf8')
            response.on('data', function(body) {
                item = JSON.parse(body)
                should.equal(item.id, idOfCreatedItem)
                should.equal(item.createdAt, createdAt)
                should.not.equal(item.updatedAt, updatedAt)

                item.isodate.should.equal('1990-12-24')
                item.startTime.should.equal('18:00')
                item.site.should.equal('Other Church')
                item.preacher.should.equal('Man of God')
                item.helper.should.equal('none')
                item.musician.should.equal('Organ Man')
                item.communion.should.equal(true)
                done()
            })
        })
    })

    it('clean up', function(done) {
        request('/services/' + idOfCreatedItem, 'DELETE', '', (response) => {
            response.statusCode.should.equal(200)
            done()
        })
    })
})
