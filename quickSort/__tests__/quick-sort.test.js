'use strict';

const sorter = require('../quick-sort.js');
const quickSort = sorter.quickSort;


const inputArray = [8, 4, 23, 42, 16, 15];
let iALength = (inputArray.length -1);
const reverseSorted = [20, 18, 12, 8, 5, -2];
let rSLength = (reverseSorted.length - 1);
const fewUniques = [5, 12, 7, 5, 5, 7];
let fULength = (fewUniques.length - 1);
const nearlySorted = [2, 3, 5, 7, 13, 11];
let nSLength = (nearlySorted.length - 1);

describe('Testing quick sort function', () => {
  it('Should return the inputArray correctly sorted when inputArray is passed into the quickSort() function', () => {
    const sortedArray = quickSort(inputArray, 0, iALength);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Should return the reverseSorted array correctly sorted when passed into the quickSort() function', () => {
    const sortedArray = quickSort(reverseSorted, 0, rSLength);

    expect(sortedArray).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Should return the fewUniques array correctly sorted when passed into the quickSort() function', () => {
    const sortedArray = quickSort(fewUniques, 0, fULength);

    expect(sortedArray).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('Should return the nearlySorted array correctly sorted when passed into the quickSort() function', () => {
    const sortedArray = quickSort(nearlySorted, 0, nSLength);

    expect(sortedArray).toEqual([2, 3, 5, 7, 11, 13]);
  });
});