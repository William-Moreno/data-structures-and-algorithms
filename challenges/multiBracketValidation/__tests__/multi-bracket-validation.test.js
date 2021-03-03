'use strict';

const multiBracketValidator = require('../multi-bracket-validation.js');
const validate = multiBracketValidator.validator;

describe('Testing multiBracketValidator function', () => {
  it('Should return "true" if the string contains valid open and close paranthesis', () => {
    const validOne = validate('{[]}');
    const validTwo = validate('[(){[]}]()');
    const validThree = validate('{object[array(index)]}');

    expect(validOne).toEqual(true);
    expect(validTwo).toEqual(true);
    expect(validThree).toEqual(true);
  });

  it('Should return "false" if the string contains invalid open and close paranthesis', () => {
    const testOne = validate('[({}]');
    const testTwo = validate('[}');
    const testThree = validate('{what} a (total) [MESS]}');

    expect(testOne).toEqual(false);
    expect(testTwo).toEqual(false);
    expect(testThree).toEqual(false);
  });
});

