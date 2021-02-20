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

const linkedList = new LinkedList();

linkedList.head = new Node(0);
linkedList.head.next = new Node(1);
linkedList.head.next.next = new Node(2);
linkedList.head.next.next.next = new Node(3);
linkedList.head.next.next.next.next = new Node(4);

linkedList.insert(10);
console.log(linkedList.includes(10));
console.log(linkedList.toString());

module.exports = {
  listGen: LinkedList,
  nodeGen: Node,
};