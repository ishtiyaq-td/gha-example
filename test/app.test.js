// test/app.test.js
const { expect } = require('chai');
const { add } = require('../app');

describe('Addition Function', () => {
  it('should return 5 when adding 2 and 3', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return -1 when adding 2 and -3', () => {
    const result = add(2, -3);
    expect(result).to.equal(-1);
  });
});
