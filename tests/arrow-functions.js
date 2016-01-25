var expects = require('chai').expect;

describe('arrow-functions', function() {
  it('is shorter to write', function() {
    var fn = () => {
      return 'Hello World';
    };

    expects(fn()).to.equal('Hello World');
  });

  it('one parameter can be written without parens', function() {
    var fn = name => {
      return `Hello ${name}`;
    }

    expects(fn('Sam')).to.equal('Hello Sam');
  });
});
