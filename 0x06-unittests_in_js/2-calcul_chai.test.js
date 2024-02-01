const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should perform addition when type is SUM', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('should perform subtraction when type is SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should perform division when type is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('should return "Error" when attempting to divide by 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });

  it('should throw an error for an invalid type', () => {
    expect(() => {
      calculateNumber('INVALID', 1.4, 4.5);
    }).to.throw('Invalid type. Use SUM, SUBTRACT or DIVIDE');
  });
});
