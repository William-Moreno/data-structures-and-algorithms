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

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {

  }


  contains(value) {

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
