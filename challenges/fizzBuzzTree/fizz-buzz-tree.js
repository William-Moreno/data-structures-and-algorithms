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

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();
      console.log(current.value);


      for (let i = 0; i < current.children.length; i++) {
        if (current.children[i]) {
          queue.unshift(current.children[i]);
        }
      }
    }

  }
}

function fizzBuzzTree(kAryTree) {
  if(kAryTree.root === null || isNaN(kAryTree.root.value)) {
    return 'Exception - Tree contains no values or non-numeric values';
  }

  const returnTree = kAryTree;
  let current;
  let queue = [];

  queue.unshift(returnTree.root);

  while(queue.length) {
    current = queue.pop();
    let fizzBuzz = '';

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
karyTree.root.children[1] = new KaryNode(25, karyTree.k);
karyTree.root.children[2] = new KaryNode(11, karyTree.k);
karyTree.root.children[0].children[0] = new KaryNode(9, karyTree.k);

karyTree.breadth();
const convertedTree = fizzBuzzTree(karyTree);
convertedTree.breadth();