'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const Stack = master.StackGen;

const bracketValidation = (str) => {

  const Validator = new Stack();

  for(let i = 0 ; i < str.length ; i++) {

    let character = str.charAt(i);

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

console.log(bracketValidation('{}'));
console.log(bracketValidation('('));
console.log(bracketValidation('[{()[]}()]'));
console.log(bracketValidation('[{()[]}()'));
console.log(bracketValidation(')[]}()]'));
console.log(bracketValidation('[{(interference)[]}(tricky)]'));


module.exports = {
  bracketValidation,
};
