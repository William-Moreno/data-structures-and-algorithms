'use strict';

const arrayShift = require('../array-shift.js');

describe('Testing the array-shift module', () => {
  it('Should return the supplied array with the supplier value in the middle index', () => {
    const shiftedArray = arrayShift([2, 4, 6, 8], 5);

    expect(shiftedArray).toEqual([2, 4, 5, 6, 8]);
  });
});