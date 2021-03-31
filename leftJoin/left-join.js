'use strict';

const table = require('../hashtable/hashtable.js');
const HashTable = table.HashTable;


function leftJoin(map1, map2) {
  const output= [];
  let leftKey;
  let leftValue;
  let rightValue;
  let index = 0;

  for(let i = 0 ; i < map1.size ; i++) {
    if(map1.buckets[i]) {
      let current = map1.buckets[i].head;
      let leftCounter = 0;
      let rightCounter = 0;

      while(current) {

        for(let key in current.value) {
          leftKey = key;
          let leftTemp = map1.get(leftKey);
          if(Array.isArray(leftTemp)) {
            leftValue = leftTemp[leftCounter];
            leftCounter++;
          } else {
            leftValue = leftTemp;
            leftCounter = 0;           
          }
          break;
        }
  
        let rightTemp = map2.get(leftKey);
        if(Array.isArray(rightTemp)) {
          rightValue = rightTemp[rightCounter];
          rightCounter++;
        } else {
          rightValue = rightTemp;
          rightCounter = 0;           
        }

        let object = {
          key: leftKey,
          map1Value: leftValue,
          map2Value: rightValue,
        };
        output[index] = object;
        index++;

        current = current.next;
      }

    }

  }

  return output;
}


module.exports = {
  leftJoin: leftJoin,
};