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
}


module.exports = {
  listGen: LinkedList,
  nodeGen: Node,
};