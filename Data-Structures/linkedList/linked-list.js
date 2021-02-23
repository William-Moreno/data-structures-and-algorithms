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

    if(!this.head) {
      this.head = appendedNode;
      return this.head;
    }

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
    return 'Exception';
  }

  insertAfter(value, newVal) {
    let newValNode = new Node(newVal);
    let current = this.head;

    while(current) {
      if(current.value === value) {
        newValNode.next = current.next;
        current.next = newValNode;
        return this.head;
      }
      current = current.next;
    }
    return 'Exception';
  }

  kthFromEnd(k) {
    if(!this.head.next) {
      return `Only 1 value exists in the Linked List: ${this.head.value}`;
    }

    if(k < 1) {
      return 'Exception';
    }

    let marker = this.head;
    let current = this.head;

    for (let i = 0 ; i < k ; i++) {
      if(!marker) {
        return 'Exception';
      }
      marker = marker.next;
    }

    if (!marker) {
      return 'Exception';
    }

    while(marker.next) {
      current = current.next;
      marker = marker.next;
    }

    return current.value;
  }
}


const test = new LinkedList();
test.head = new Node(0);
test.head.next = new Node(1);
test.head.next.next = new Node(2);
test.head.next.next.next = new Node(3);
test.head.next.next.next.next = new Node(4);

console.log(test.kthFromEnd(3));



module.exports = {
  listGen: LinkedList,
  nodeGen: Node,
};