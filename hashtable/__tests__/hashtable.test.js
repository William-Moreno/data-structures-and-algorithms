const dataStructure = require('../hashtable.js');
const HashTable = dataStructure.HashTable;


let table = new HashTable(1024);

table.add('Laurel', 'Hot Wife' );
table.add('Riley', 'PlayStation Jockey' );
table.add('Alexis', 'Dancer' );

describe('Testing hash table behavior', () => {
  it('Should take in a key / value pair and successfully insert it into the hashtable using add()', () => {
    table.add('Bill', 'Student' );
    let result = table.contains('Bill');

    expect(result).toBeTruthy();
  });

  it('Should retrieve the associated stored value when provided a key using get()', () => {
    let result = table.get('Bill');

    expect(result).toEqual('Student');
  });

  it('Should null when provided a non-existent key using get()', () => {
    let result = table.get('Doug');

    expect(result).toEqual(null);
  });

  it('Should hash a key to an in-range value using hash()', () => {
    let result = table.hash('Doug');
    console.log(result);
    if(result >= 0 && result < 1024){
      result = true;
    } else {
      result = false;
    }

    expect(result).toEqual(true);
  });

  it('Should handle a collision within a hashtable when using add()', () => {
    table.add('Doug', 'Test Dummy');
    let bucketValue = table.buckets[409];
    console.log(bucketValue);

    expect(bucketValue).toEqual(`{"head": {"next": null, "value": {"Doug": "Test Dummy"}}}`);
  });
});
