'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const NodeGen = master.nodeGen;
const StackGen = master.StackGen;
const QueueGen = master.QueueGen;

class PseudoQueue{
  constructor() {
    this.faceUp = new StackGen();
    this.faceDown = new StackGen();
    this.rear = this.faceDown.top;
    this.front = this.faceUp.top;
    
  }

  enqueue(val){

    while(this.faceUp.top){
      let temp = this.faceUp.pop();
      this.faceDown.push(temp);
    }
    this.faceUp.push(val);
    while(this.faceDown.top){
      let temp = this.faceDown.pop();
      this.faceUp.push(temp);
    }

  }

  dequeue(){
    if(!this.faceDown.top && !this.faceUp.top){
      return 'Exception - Queue is empty';
    }
    
    return this.faceUp.pop();

  }

}


// let looker = new PseudoQueue();

// console.log(looker);

// looker.enqueue(2);
// console.log(looker);

// looker.enqueue(4);
// console.log(looker);

// let temp = looker.dequeue();
// console.log(looker);
// console.log(temp);


// looker.enqueue('A');
// console.log(looker);

// let temp2 = looker.dequeue();
// console.log(looker);
// console.log(temp2);


module.exports = {
  PseudoQueue: PseudoQueue,
};
