'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  isEmpty(){
    return this.top === null;
  }
  
  push(value){
    let pushedNode = new Node(value);
    if(this.isEmpty()){
      this.top = pushedNode;
    } else {
      pushedNode.next = this.top;
      this.top = pushedNode;
    }
  }

  pop(){
    if(this.isEmpty()){
      return 'Exception - Stack is empty';
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.isEmpty()){
      return 'Exception - Stack is empty';
    }
    return this.top.value;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  isEmpty(){
    return this.front === null;
  }
  
  enqueue(value){
    let enqueuedNode = new Node(value);
    if(this.isEmpty()){
      this.front = enqueuedNode;
      this.rear = enqueuedNode;
      return;
    } else {
      this.rear.next = enqueuedNode;
      this.rear = enqueuedNode;
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return 'Exception - Queue is empty';
    }
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.isEmpty()){
      return 'Exception - Queue is empty';
    }
    return this.front.value;
  }

}

module.exports = {
  StackGen: Stack,
  QueueGen: Queue,
  nodeGen: Node,
};