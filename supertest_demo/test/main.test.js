var main = require("../main.js");
var log4js = require("log4js");
var should = require('should');
var supertest = require('supertest');

var logger = log4js.getLogger(__filename);
var request = supertest(main);

describe('./main.test.js', function() {
  it('should equal 64 when n === 8', function(done) {
    request.get('/square').query({n:8}).end(function(err, res) {
      should.not.exist(err);
      res.text.should.equal('64');
      done(err);
    });
  });

  it('should throw when n isnt Number', function (done) {
    request.get('/square').query({n:'foo'}).expect(500, done);
  });
  
});

