'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
  }

  insert(value) {
    let insertedNode = new Node(value);

    if(this.head === null){
      this.head = insertedNode;
      return this.head;
    } else {
      insertedNode.next = this.head;
      this.head = insertedNode;
    }
    return this.head;
  }

  includes(value) {
    let current = this.head;

    while(current) {
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let listString = '';

    while(current) {
      listString += `{${current.value}} -> `;
      current = current.next;
    }
    listString += `NULL`;
    return listString;
  }

  append(value) {
    let appendedNode = new Node(value);
    let current = this.head;

    while(current.next !== null) {
      current = current.next;
    }
    current.next = appendedNode;
  }

  insertBefore(value, newVal) {
    if(value === this.head.value) {
      this.insert(newVal);
      return this.head;
    }

    let newValNode = new Node(newVal);
    let current = this.head;

    while(current.next !== null) {
      if(current.next.value === value) {
        newValNode.next = current.next;
        current.next = newValNode;
        return this.head;
      }
      current = current.next;
    }
    return console.log('Exception');
  }

  insertAfter(value, newVal) {

  }
}

const testList = new LinkedList();
testList.head = new Node(0);
testList.head.next = new Node(1);
testList.head.next.next = new Node(2);
testList.head.next.next.next = new Node(3);

console.log(testList.toString());
testList.append(4);
console.log(testList.toString());
testList.insertBefore(0, 5);
console.log(testList.toString());


module.exports = {
  listGen: LinkedList,
  nodeGen: Node,
};