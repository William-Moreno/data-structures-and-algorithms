'use strict';

const forest = require('../tree.js');
const Node = forest.Node;
const Tree = forest.Tree;
const BST = forest.BST;

const tree = new Tree();

beforeEach(() => {

  tree.root = new Node(5);
  tree.root.left = new Node(10);
  tree.root.left.left = new Node(0);
  tree.root.left.right = new Node(20);
  tree.root.right = new Node(15);
  tree.root.right.right = new Node(25);

});

describe('Testing Tree class constructor an methods', () => {
  it('Should instantiate an empty tree successfully', () => {
    const testTree = new Tree();

    expect(testTree.root).toBeFalsy();
  });

  it('Should instantiate a tree with a single root node', () => {
    const testTree = new Tree();
    testTree.root = new Node(5);

    expect(testTree.root.value).toEqual(5);
  });

  it('Should add a left child and a right child to a single root node', () => {
    const testTree = new Tree();
    testTree.root = new Node(5);
    testTree.root.left = new Node(10);
    testTree.root.right = new Node(25);

    expect(testTree.root.value).toEqual(5);
    expect(testTree.root.left.value).toEqual(10);
    expect(testTree.root.right.value).toEqual(25);
  });

  it('Should successfully return a collection from preOrder() traversal', () => {
    const response = tree.preOrder();

    expect(response).toEqual([ 5, 10, 0, 20, 15, 25 ]);
  });

  it('Should successfully return a collection from inOrder() traversal', () => {
    const response = tree.inOrder();

    expect(response).toEqual([ 0, 10, 20, 5, 15, 25 ]);
  });

  it('Should successfully return a collection from postOrder() traversal', () => {
    const response = tree.postOrder();

    expect(response).toEqual([ 0, 20, 10, 25, 15, 5 ]);
  });
});