'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const array = [];

    const innerPreOrder = (node) => {

      array.push(node.value);

      if(node.left) {
        innerPreOrder(node.left);
      }
      if(node.right) {
        innerPreOrder(node.right);
      }
    };

    let current = this.root;
    innerPreOrder(current);
    return array;

  }

  inOrder() {
    const array = [];

    const innerInOrder = (node) => {
      
      if(node.left) {
        innerInOrder(node.left);
      }

      array.push(node.value);

      if(node.right) {
        innerInOrder(node.right);
      }
    };

    let current = this.root;
    innerInOrder(current);
    return array;

  }

  postOrder() {
    const array = [];

    const innerPostOrder = (node) => {

      if(node.left) {
        innerPostOrder(node.left);
      }

      if(node.right) {
        innerPostOrder(node.right);
      }

      array.push(node.value);

    };

    let current = this.root;
    innerPostOrder(current);
    return array;

  }

}

class BinarySearchTree extends Tree {

  add(value) {
    let newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
      return;
    }
    
    const addNode = (current) => {
      
      if(value < current.value) {
        if(current.left) {
          current = current.left;
          addNode(current);
        } else {
          current.left = newNode;
          return;
        }
      }
      
      if(value > current.value) {
        if(current.right) {
          current = current.right;
          addNode(current);
        } else { 
          current.right = newNode;
          return;
        }
      }
      
    };
    
    let current = this.root;
    addNode(current);
  }

  contains(value) {
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
    
    let isInTree = false;

    const checker = (current) => {
      
      
      if(value === current.value) {
        isInTree = true;
      }
      
      if(value < current.value) {
        if(current.left) {
          current = current.left;
          return checker(current);
        } else {
          isInTree = false;
        }
      } else if(value > current.value) {
        if(current.right) {
          current = current.right;
          return checker(current);
        } else {
          isInTree =  false;
        }
      }
    };

    let current = this.root;
    checker(current);

    return isInTree;
  }
}

const tree = new Tree();

tree.root = new Node(5);
tree.root.left = new Node(10);
tree.root.left.left = new Node(0);
tree.root.left.right = new Node(20);
tree.root.right = new Node(15);
tree.root.right.right = new Node(25);


console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());


const bst = new BinarySearchTree();
const third = bst.contains(30);
bst.add(30);
bst.add(2);
bst.add(32);
bst.add(4);
bst.add(64);
bst.add(8);
bst.add(128);
bst.add(16);

console.log(bst.inOrder());

const first = bst.contains(64);
const second = bst.contains(5);
console.log(first);
console.log(second);
console.log(third);