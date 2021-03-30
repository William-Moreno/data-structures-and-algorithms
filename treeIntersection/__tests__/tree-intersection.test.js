'use strict';

const trees = require('../../challenges/tree/tree.js');
const BinaryTree = trees.BinaryTree;
const BinarySearchTree = trees.BST;
const Node = trees.Node;
const treeUtil = require('../tree-intersection.js');
const treeIntersection = treeUtil.tree_intersection;

const t1 = new BinaryTree();
const t2 = new BinaryTree();
const t3 = new BinaryTree();

t1.root = new Node(150);
t1.root.left = new Node(100);
t1.root.right = new Node(250);
t1.root.left.left = new Node(75);
t1.root.left.right = new Node(160);
t1.root.right.left = new Node(200);
t1.root.right.right = new Node(350);
t1.root.left.right.left = new Node(125);
t1.root.left.right.right = new Node(175);
t1.root.right.right.left = new Node(300);
t1.root.right.right.right = new Node(500);

t2.root = new Node(42);
t2.root.left = new Node(100);
t2.root.right = new Node(600);
t2.root.left.left = new Node(15);
t2.root.left.right = new Node(160);
t2.root.right.left = new Node(200);
t2.root.right.right = new Node(350);
t2.root.left.right.left = new Node(125);
t2.root.left.right.right = new Node(175);
t2.root.right.right.left = new Node(4);
t2.root.right.right.right = new Node(500);

t3.root = new Node(3);
t3.root.left = new Node(51);
t3.root.right = new Node(14);
t3.root.left.left = new Node(27);
t3.root.left.right = new Node(6902);

describe('Testing tree intersection function', () => {
  it('Should return an array of all of the common values in two different binary trees', () => {
    const result = treeIntersection(t1, t2);

    expect(result).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });

  it('Should return "No values in common." if there are no common values in two different binary trees', () => {
    const result = treeIntersection(t1, t3);

    expect(result).toEqual('No values in common.');
  });
});