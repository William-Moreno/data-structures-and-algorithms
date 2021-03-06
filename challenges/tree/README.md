# Binary Tree and BST Implementation


Create class for a `Node`. Create `BinaryTree` class with methods `preOrder()`, `inOrder()` and `postOrder`. Create a `BinarySearchTree` with methods `add(value)`  and `contains(value)`.

Create a `BinaryTree` instance method that finds the maximum value present within the tree.

Create a `BinaryTree` instance method that traverses the tree in a breadth first manner and returns a list of values in order.

## Challenge

Create classes for `Node`, `BinaryTree` and `BinarySearchTree`. Create the following methods for the `BinaryTree` class:
- `preOrder` - traverses tree in pre-order
- `inOrder` - traverses tree in in-order
- `postOrder` - traverses tree in post-order
Create the following methods for `BinarySearchTree` class:
- `add(value)` - properly inserts a given value into the tree at the proper location
- `contains(value)` - traverses the tree and returns a boolean indicating if the tree contains the value or not

Create an instance method `findMaximumValue` that returns the maximum value stored in the tree, assuming all values stored in the BinaryTree are numeric.

Create a breadth first traversal method which takes the BinaryTree as its unique input. Traverse the tree and return a list of the values in the tree in the order in which they were encountered.

## Approach & Efficiency

- created `Node` class
- created `BinaryTree` class
- created three methods for `BinaryTree` class traversal
- created `BinarySearchTree` class
- create two methods to satisfy the `BinarySearchTree` method requirements
- created tests to fulfil requirements

- diagramed problem solution
- created `findMaximumValue` method
- created tests to validate functionality

- diagramed problem solution
- created `breadthFirst` method
- created tests to validate functionality


## API

[code](./tree.js)

- `BinaryTree`
  - `preOrder()`
  - `inOrder()`
  - `postOrder()`
  - `findMaximumValue()`
  - `breadthFirst()`
- `BinarySearchTree`
  - `add(value)`
  - `contains(value)`

- `BinaryTree`
  - `preOrder()` - traverses the BinaryTree and returns an array of the contained values in pre-order depth first method.

  - `inOrder()` - traverses the BinaryTree and returns an array of the contained values in pin-order depth first method.

  - `postOrder()` - traverses the BinaryTree and returns an array of the contained values in post-order depth first method.

  - `findMaximumValue()` - traverses the BinaryTree in a pre-order method comparing the values of the nodes and setting a pre-declared variable to the higher value of each comparison. Following the traversal the variable containing the highest value in the BinaryTree is returned.

![Whiteboard Example](../../assets/find-maximum-value.png)

  - `breadthFirst()` - traverses the tree by level utilizing a "queue/array" and returns an array of the contained values in the correct sequence. 

![Whiteboard Example](../../assets/breadth-first.png)

- `BinarySearchTree`
  - `add(value)` - traverses a BinarySearchTree and inserts the value at the proper location using recursion.

  - `contains(value)` - traverses the BinarySearchTree to determine if it contains the supplied value and returns a boolean.


