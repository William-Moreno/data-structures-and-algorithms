# Queue with Stacks
---

Create a PseudoQueue class that emulates a Queue class utilizing two Stack objects. Create methods that replicate the enqueue and dequeue methods of a standard queue.

## Challenge

- Create a `PseudoQueue` class that instantiates two `Stack` objects
  - create a `enqueue` method with a value argument that adds a new node with the value supplied to the rear of the pseudoqueue
  - create a `dequeue` method that takes no arguments and removes the front node from the pseudoqueue and returns its value or an exception if the queue is empty

  ## Approach & Efficiency

- Created the PseudoQueue class
- Created the `.enqueue(value)` method for the class utilizing the two stacks and their `.push(val)` and `.pop()` methods
- created the `.dequeue()` method for the class using a conditional to verify the PseudoQueue contains at least one value and if it does uses the `.pop()` method of the stack to remove the correct node
- Created tests to verify functionality

  ## API

  The methods available to my PseudoQueue are:

- `.enqueue(value)`
- `.dequeue()`

#### `.enqueue(value)`

This method first transfers all of the nodes from the "faceUp" stack to the "faceDown" stack by `.pop()`-ing from the former and `.push(tempValue)`-ing into the latter in order to reverse the order of nodes so that the rearmost node of the pseudoqueue is located on top of the "faceDown" stack. At that moment, the `.push(value)` is used to add a node with the supplied value to the top of the "faceDown" stack. Then, the transfer process is reversed using the same transportation system to reverse order of the nodes while moving them back into the "faceUp" stack again.

#### `.dequeue()`

This method first verifies that at least one value exists in the PseudoQueue. It then uses `.pop()` on the "faceUp" stack of the PseudoQueue to return the 'front/first' value. It will return an `'Exception - Queue is empty'` if the pseudoqueue is empty when `.dequeue()` is called.

 ## Solution
[queue-with-stacks](queue-with-stacks.js)

![Whiteboard](../../assets/queue-with-stacks.png)