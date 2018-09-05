
require('mocha');
const assert = require('assert');
const should = require('should');
const unique = require('./index');

describe('unique', function () {
  it('should throw an error if the value passed is not an array:', function() {
    (function() {
      unique('a', 'b', 'c');
    }).should.throw('array-unique expects an array.');
  });

  it('should return an array with no duplicate values:', function() {
    unique(['a','b','c','a','b']).should.eql(['a','b','c']);
    unique([[1,2,3],['test1','test2'],[1,2,3],['test3'],['test1','test2']]).should.eql([[1,2,3],['test1','test2'],['test3']]);
    unique([{'test1': 111},{'test2': 222},{test3:333},{'test2':222}]).should.eql([{'test1': 111},{'test2': 222},{test3:333}]);
  });

});