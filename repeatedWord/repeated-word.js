'use strict';

const hashtable = require('../hashtable/hashtable.js');
const HashTable = hashtable.HashTable;

const repeatedWord = (string) => {
  let workingString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  let convertedString = workingString.toLowerCase();
  let stringArray = convertedString.split(' ');
  let recurArray= [];
  let stringHashTable = new HashTable(1024);

  for(let i = 0 ; i < stringArray.length ; i++) {
    stringHashTable.add(stringArray[i], i);
  }

  for(let j = 0 ; j < stringArray.length ; j++) {
    let checker = stringHashTable.get(stringArray[j]);
    if(checker[1]) {
      let wordObj = {
        index: checker[1],
        word: stringArray[j],
      };
      if(!recurArray.length || checker[1] > recurArray[0].index) {
        recurArray.push(wordObj);
      } else {
        recurArray.unshift(wordObj);
      } 

    }
  }
  
  if(recurArray.length) {
    return recurArray[0].word;
  }

  return 'No duplicdated words found';
};

module.exports = {
  repeatedWord: repeatedWord,
};

