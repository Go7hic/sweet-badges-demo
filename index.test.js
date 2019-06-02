var expect = require('chai').expect;
var hello = require('./index');

describe('run index.js', function() {
  it('should return "sweet badges"', function() {
    expect(hello()).to.equal('sweet badges');
  });
});