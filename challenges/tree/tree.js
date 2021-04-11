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

  breadthFirst() {
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
    const array = [];
    const queue = [];
    queue.push(this.root);

    while(queue.length !== 0) {
      let current = queue[0];

      if(current.left) {
        queue.push(current.left);
      }

      if(current.right) {
        queue.push(current.right);
      }

      let tempNode = queue.shift();
      array.push(tempNode.value);
    }

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

  leafWithTotalWeight(int) {
    if(!this.root) {
      return 'Exception - No nodes exist in the tree';
    }

    let counter = 0;
    let exists = false;

    const traverse = (current) => {
      if(exists) {
        return;
      }

      counter+= current.value;

      if(current.left) {
        traverse(current.left);
      }

      if(current.right) {
        traverse(current.right);
      }

      if(!current.left && !current.right && counter === int) {
        exists = true;
      } else {
        counter-= current.value;
      }
    };

    let current = this.root;
    traverse(current);
    return exists;
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


const whiteboardTree = new BinaryTree();

whiteboardTree.root = new Node(3);
whiteboardTree.root.left = new Node(6);
whiteboardTree.root.right = new Node(-3);
whiteboardTree.root.left.left = new Node(7);
whiteboardTree.root.left.right = new Node(1);
whiteboardTree.root.right.left = new Node(9);
whiteboardTree.root.right.right = new Node(3);
whiteboardTree.root.right.right.left = new Node(-7);
whiteboardTree.root.right.right.right = new Node(11);

console.log('input "16"', whiteboardTree.leafWithTotalWeight(16));
console.log('input "10"', whiteboardTree.leafWithTotalWeight(10));
console.log('input "50"', whiteboardTree.leafWithTotalWeight(50));
console.log('input "-4"', whiteboardTree.leafWithTotalWeight(-4));
console.log('input "3"', whiteboardTree.leafWithTotalWeight(3));
console.log('input "14"', whiteboardTree.leafWithTotalWeight(14));






module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BST: BinarySearchTree,
};