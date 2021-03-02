'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const StackGen = master.StackGen;


class AnimalShelter {
  constructor() {
    this.front = new StackGen();
    this.back = new StackGen();

  }

  enqueue(animal){

    while(this.front.top){
      let temp = this.front.pop();
      this.back.push(temp);
    }
    this.back.push(animal);
    while(this.back.top){
      let temp = this.back.pop();
      this.front.push(temp);
    }

  }

  dequeue(pref){
    if(!this.back.top && !this.front.top){
      return 'Sorry, the animal shelter is empty';
    }

    while(this.front.top){
      let checker = this.front.peek();
      if(checker.type === pref) {
        let animalOut = this.front.pop();
        while(this.back.top){
          let temp = this.back.pop();
          this.front.push(temp);
        }
        return animalOut;
      }
      let temp = this.front.pop();
      this.back.push(temp);
    }
    while(this.back.top){
      let temp = this.back.pop();
      this.front.push(temp);
    }

    return `Sorry, we don't appear to have any ${pref}s at this time.`;

  }
}

let as = new AnimalShelter();
as.enqueue({type: 'cat', name: 'Kreacher'});
as.enqueue({type: 'cat', name: 'Dobby'});
as.enqueue({type: 'dog', name: 'Sammy'});
as.enqueue({type: 'cat', name: 'Flerken'});
as.enqueue({type: 'dog', name: 'Lady'});
as.enqueue({type: 'dog', name: 'Tramp'});
as.enqueue({type: 'cat', name: 'Loki'});

console.log(as.dequeue('cat'));
console.log(as.dequeue('dog'));
console.log(as.dequeue('dog'));
console.log(as.dequeue('cat'));
