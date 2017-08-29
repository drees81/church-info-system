var should = require('chai').should()
var http = require('http')

function createOptions(method) {
    return {
        postname: 'localhost',
        port: 3000,
        path: '/services',
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
}

describe('api', function() {

        describe('create service', function() {
        it('should create a new service', function(done) {

            const service = {
                    date: '1900-01-02',
                    startTime: '01:50',
                    site: 'Nice Church',
                    preacher:'Someone who can do it', 
                    helper: 'Whoever wants',
                    musician: 'Piano Man',
                    communion: false
            }

            var options = createOptions('POST')
            var req = http.request(options, function(response) {
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
            req.on('error', function(e) {
                console.log('problem with request: ' + e)
            })
            req.write(JSON.stringify(service));
            req.end();
        })
    })
})