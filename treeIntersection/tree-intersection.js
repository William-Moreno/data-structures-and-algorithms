'use strict';

const trees = require('../challenges/tree/tree.js');
const BinaryTree = trees.BinaryTree;
const BinarySearchTree = trees.BST;
const Node = trees.Node;

const tree_intersection = (tree1, tree2) => {
  const answerArray = [];
  let valueList = tree1.preOrder();

  if(tree2.root === null) {
    return 'Exception - Tree contains no values';
  }

  const innerPreOrder = (node) => {

    if(valueList.includes(node.value)){
      answerArray.push(node.value);
    }

    if(node.left) {
      innerPreOrder(node.left);
    }
    if(node.right) {
      innerPreOrder(node.right);
    }
  };

  let current = tree2.root;
  innerPreOrder(current);
  if(!answerArray.length){
    return 'No values in common.';
  }
  return answerArray;

};


module.exports = {
  tree_intersection: tree_intersection,
};