'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const StackGen = master.StackGen;

class PseudoQueue{
  constructor() {
    this.faceUp = new StackGen();
    this.faceDown = new StackGen();
    // this.rear = this.faceDown.top;
    // this.front = this.faceUp.top;
    
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


module.exports = {
  PseudoQueue: PseudoQueue,
};
