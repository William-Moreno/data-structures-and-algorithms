'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;

  }

  includes(key) {
    let current = this.head;

    while(current) {
      if(current.value){
        let objectKey = Object.keys(current.value);
        if(key === objectKey[0]) {
          return (current.value[objectKey[0]]);
        }
      }
      current = current.next;
    }
    return false;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size); // this is a more object oriented approach to creating an array in JS // => [undefined, ...size];
  }

  hash(key) {
    // assumes a string is passed in, .split is a string method
    let asciiSum = key.split('').reduce((acc, char) => {
      return acc +char.charCodeAt(0); // charCodeAt converts string characters into ascii values
    }, 0);

    return (asciiSum * 599) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);  // index of our bucket

    if(!this.buckets[hash]){
      this.buckets[hash] = new LinkedList();
    }

    let data = { [key]: value };
    this.buckets[hash].insert(data);
  }

  contains(key) {
    let hash = this.hash(key);

    if(this.buckets[hash]) {
      return true;
    } else {
      return false;
    }

  }

  get(key) {
    let hash = this.hash(key);

    if(this.buckets[hash]) {
      let test = this.buckets[hash].includes(key);
      return test;
    } else {
      return null;
    }
  }
}


module.exports = {
  HashTable: HashTable,
  LinkedList: LinkedList,
  Node: Node,
};