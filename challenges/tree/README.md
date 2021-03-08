# Binary Tree and BST Implementation


Create class for a `Node`. Create `BinaryTree` class with methods `preOrder()`, `inOrder()` and `postOrder`. Create a `BinarySearchTree` with methods `add(value)`  and `contains(value)`.

## Challenge

Create classes for `Node`, `BinaryTree` and `BinarySearchTree`. Create the following methods for the `BinaryTree` class:
- `preOrder` - traverses tree in pre-order
- `inOrder` - traverses tree in in-order
- `postOrder` - traverses tree in post-order
Create the following methods for `BinarySearchTree` class:
- `add(value)` - properly inserts a given value into the tree at the proper location
- `contains(value)` - traverses the tree and returns a boolean indicating if the tree contains the value or not

## Approach & Efficiency

- created `Node` class
- created `BinaryTree` class
- created three methods for `BinaryTree` class traversal
- created `BinarySearchTree` class
- create two methods to satisfy the `BinarySearchTree` method requirements


## API

- `BinaryTree`
  - `preOrder()`
  - `inOrder()`
  - `postOrder()`
  - `findMaximumValue()`
- `BinarySearchTree`
  - `add(value)`
  - `contains(value)`

- `BinaryTree`
  - `preOrder()` - traverses the BinaryTree and returns an array of the contained values in pre-order depth first method.

  - `inOrder()` - traverses the BinaryTree and returns an array of the contained values in pin-order depth first method.

  - `postOrder()` - traverses the BinaryTree and returns an array of the contained values in post-order depth first method.

  - `findMaximumValue()` - traverses the BinaryTree in a pre-order method comparing the values of the nodes and setting a pre-declared variable to the higher value of each comparison. Following the traversal the variable containing the highest value in the BinaryTree is returned.

![Whiteboard Example](../../assets/find-maximum-value.png)

- `BinarySearchTree`
  - `add(value)` - traverses a BinarySearchTree and inserts the value at the proper location using recursion.

  - `contains(value)` - traverses the BinarySearchTree to determine if it contains the supplied value and returns a boolean.


