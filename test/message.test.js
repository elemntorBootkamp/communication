
const expect = require('chai').expect;

// Import the function to be tested
const myFunction = require('../controllers/message');
const rt = myFunction.returnTrue;
// Test the function
describe('rt', () => {
  it('should return true', () => {
    const result = rt();
    expect(result).to.be.true;
  });
});


