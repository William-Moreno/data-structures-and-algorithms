# "FizzBuzz" K-ary Tree


Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.

Set the values of each of the new nodes depending on the corresponding node value in the source tree.

## Challenge

Create classes for `KaryNode`, `KaryTree` with a `breadth()` method for traversal. Create the function `fizzBuzzTree(kAryTree)`. 

## Approach & Efficiency

- created `KaryNode` class
- created `KaryTree` class
- created `breadth()` method for `KaryTree` class traversal
- created `fizzBuzzTree(kAryTree)` function
- created tests to validate functionality


## API

- `breadth()`
- `fizzBuzzTree(kAryTree)`

  - `breadth()` - traverses the KaryTree in the breadth first method and returns an array of the contained values in order. The function utilizes a while loop with a nested for loop and uses a queue to determine ordering.

  - `fizzBuzzTree(kAryTree)` -  creates a new tree and sets it equal to the tree passed in as an argument. It then traverses the new Tree in the breadth first method, conducts an evaluation of each node's value as it is removed from the queue and reassigns the node's value based on the results and finally returns the new tree.

![Whiteboard](../../assets/fizz-buzz.png)
[code](./fizz-buzz-tree.js)
