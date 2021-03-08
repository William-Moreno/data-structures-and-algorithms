'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
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
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
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
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
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

  findMaximumValue() {
    if(this.root === null || isNaN(this.root.value)) {
      return 'Exception - Tree contains no numeric values';
    }

    let currentMaximum = this.root.value;

    const findMaxPreOrder = (node) => {

      if(node.value > currentMaximum) {
        currentMaximum = node.value;
      }

      if(node.left) {
        findMaxPreOrder(node.left);
      }
      if(node.right) {
        findMaxPreOrder(node.right);
      }
    };

    let current = this.root;
    findMaxPreOrder(current);
    return currentMaximum;
  }

}

class BinarySearchTree extends BinaryTree {


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

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BST: BinarySearchTree,
};