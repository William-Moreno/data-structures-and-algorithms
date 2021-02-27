# Stacks and Queues
---

Create classes for a `Node`, a `Stack` and a `Queue` which will instantiate both an empty stack and an empty queue. Create multiple methods in the `Stack` and `Queue` classes that manipulate them. Test the results for proper functionality.

## Challenge

- Create a `Node` class with properties for value and next
- Create a `Stack` class with a top preoperty which creates an empty stack
  - there should be an empty value assigned to top when created
  - create a `push` method with a value arguments that adds a new node with the value supplied to the top of the stack
  - create a `pop` method that takes no arguments and removes the top node from the stack and returns its value or an exception if the stack is empty
  - create a method called `peek` which takes no arguments and returns the top node's value without removing the node or an exception if the stack is empty
  - create a `isEmpty` method that has no arguments and returns a boolean indicating if the stack is empty or not
Create a `Stack` class which has a front property that creats an empty queue
  - there should be an empty value assigned to front when created
  - create a `enqueue` method with a value arguments that adds a new node with the value supplied to the back of the queue
  - create a `dequeue` method that takes no arguments and removes the front node from the queue and returns its value or an exception if the queue is empty
  - create a method called `peek` which takes no arguments and returns the front node's value without removing the node or an exception if the queue is empty
  - create a `isEmpty` method that has no arguments and returns a boolean indicating if the queue is empty or not

  ## Approach & Efficiency

- Created the Node class
- Created the Stack class
- Wrote the four methods for the Stack class
- Created the Queue class
- Wrote the four methods for the Queue class
- Then I wrote the test suite to test for all requirements

- Big O for time is O(1)
- Big O for space is O(1) *(I believe this is true, but I am not fully certain)*


  ## API

  The methods available to my Stack are:
- `.push(value)`
- `.pop()`
- `.isEmpty()`
- `.peek()`
  
  The methods available to my Queue are:
- `.enqueue(value)`
- `.dequeue()`
- `.isEmpty()`
- `.peek()`



#### `.push(value)` *(Stack)*

This method takes a value as an argument. It creates a new node and adds it to the top of the stack. Then it assigns the top property to the new node. If there are no nodes present when the method is called it simply makes the new node the top.

#### `.enqueue(value)` *(Queue)*

This method takes a value as an argument. It creates a new node sets the current rear.next to it. Then it adds then new node to the back of the queue and assigns the rear property to the new node. If there are no nodes present when the method is called it simply makes the new node the front.

#### `.pop()` *(Stack)*

 This method stores the value of the top node in a variable. It then sets the top of the stack to top.next, and returns the value stored in the variable. It will return an `'Exception'` if the stack is empty.

#### `.dequeue()` *(Queue)*

This method stores the value of the front node in a variable. It then sets the front of the stack to front.next, and returns the value stored in the variable. It will return an `'Exception'` if the queue is empty.

 #### `.isEmpty()`

 This method returns either `true` if the stack or queue is empty, and `false` if it is not.

 #### `.peek()`

 This method returns the value of the top node (Stack) or the front node (Queue) when invoked. It will return an `'Exception'` if the stack or queue is empty.


 ## Solution
[stacks-and-queues](stacks-and-queues.js)

