'use strict';

class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size); // [undefined, undefined, undefined]
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  breadth() {

    let current = null;
    let queue = [];
    let array = [];

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();
      array.push(current.value);


      for (let i = 0; i < current.children.length; i++) {
        if (current.children[i]) {
          queue.unshift(current.children[i]);
        }
      }
    }

    return array;

  }
}

function fizzBuzzTree(kAryTree) {
  if(kAryTree.root === null || isNaN(kAryTree.root.value)) {
    return 'Exception - Tree contains no values or non-numeric values';
  }

  let transfer = JSON.stringify(kAryTree);
  const returnTree = JSON.parse(transfer);
  let current;
  let queue = [];

  queue.unshift(returnTree.root);

  while(queue.length) {
    current = queue.pop();

    if(current.value % 15 === 0) {
      current.value = 'FizzBuzz';
    } else if(current.value % 5 === 0) {
      current.value = 'Buzz';
    } else if(current.value % 3 === 0) {
      current.value = 'Fizz';
    } else {
      current.value = `${current.value}`;
    }

    for (let i = 0; i < current.children.length; i++) {
      if(current.children[i]) {
        queue.unshift(current.children[i]);
      } 
    }
  }

  return returnTree;
}


const karyTree = new KaryTree(3);


karyTree.root = new KaryNode(5, karyTree.k);
karyTree.root.children[0] = new KaryNode(15, karyTree.k);
karyTree.root.children[1] = new KaryNode(24, karyTree.k);
karyTree.root.children[2] = new KaryNode(11, karyTree.k);
karyTree.root.children[0].children[0] = new KaryNode(9, karyTree.k);
karyTree.root.children[0].children[1] = new KaryNode(60, karyTree.k);
karyTree.root.children[1].children[0] = new KaryNode(35, karyTree.k);
karyTree.root.children[2].children[0] = new KaryNode(43, karyTree.k);
karyTree.root.children[2].children[1] = new KaryNode(90, karyTree.k);


console.log(karyTree.breadth());
const testTree = fizzBuzzTree(karyTree);
console.log(breadthFirst(testTree));
console.log(karyTree.breadth());


function breadthFirst(tree) {

  let current = null;
  let queue = [];
  let array = [];

  queue.unshift(tree.root);

  while (queue.length) {

    current = queue.pop();
    array.push(current.value);


    for (let i = 0; i < current.children.length; i++) {
      if (current.children[i]) {
        queue.unshift(current.children[i]);
      }
    }
  }

  return array;

}


module.exports = {
  KaryNode: KaryNode,
  KaryTree: KaryTree,
  fizzBuzzTree: fizzBuzzTree,
  breadthFirst: breadthFirst,
};