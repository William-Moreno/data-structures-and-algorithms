'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const Stack = master.StackGen;

const bracketValidation = (input) => {

  const Validator = new Stack();

  for(let i = 0 ; i < input.length ; i++) {

    let character = input.charAt(i);

    if(character === '(' || character === '[' || character === '{'){
      Validator.push(character);

    } else {
      if(Validator.isEmpty()){
        return false;
      }
      let comparison = Validator.top.value;
      if (character === ')' && comparison === '(' || character === ']' && comparison === '[' || character === '}' && comparison === '{') {
        Validator.pop();
      }
    }
  }

  return Validator.isEmpty();

};


module.exports = {
  validator: bracketValidation,
};
