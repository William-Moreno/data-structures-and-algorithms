'use strict';
const table = require('../../hashtable/hashtable.js');
const HashTable = table.HashTable;
const join = require('../left-join.js');
const leftJoin = join.leftJoin;

let synonyms = new HashTable(1024);

synonyms.add('fond', 'enamored' );
synonyms.add('wrath', 'anger' );
synonyms.add('diligent', 'employed' );
synonyms.add('outfit', 'garb');
synonyms.add('guide', 'usher');

let antonyms = new HashTable(1024);

antonyms.add('fond', 'adverse' );
antonyms.add('wrath', 'delight' );
antonyms.add('diligent', 'idle' );
antonyms.add('guide', 'follow');
antonyms.add('flow', 'jam');

let morenos = new HashTable(1024);

morenos.add('mom', 'February' );
morenos.add('dad', 'April' );
morenos.add('son', 'November' );
morenos.add('daughter', 'April');
morenos.add('cat', 'April');
morenos.add('cat', 'May');

let jacksons = new HashTable(1024);

jacksons.add('mom', 'November' );
jacksons.add('dad', 'October' );
jacksons.add('son', 'April' );
jacksons.add('daughter', 'December');
jacksons.add('dog', 'June');
jacksons.add('dog', 'August');

describe('Testing leftJoin function', () => {
  it('Should return all keys and values from map1 along with matching values or "null" appended in a new data structure', () => {
    const result = leftJoin(synonyms, antonyms);

    expect(result[0]).toEqual({ key: 'diligent', map1Value: 'employed', map2Value: 'idle' });
  });

  it('Should return all keys and values from map1 along with matching values or "null" appended in a new data structure', () => {
    const result = leftJoin(morenos, jacksons);
    console.log(result);

    expect(result.length).toBeTruthy();
    expect(result[2]).toEqual({ key: 'cat', map1Value: 'April', map2Value: null });
  });
});