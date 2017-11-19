const expect = require('chai').expect;
const func = require('../index');

describe('func', () => {

  it('should return ...', () => {
    let result = func(INPUT);
    expect(result).to.be.a('string');
    expect(result).to.equal('string');
    expect(result).to.not.be.undefined;
  });

});
