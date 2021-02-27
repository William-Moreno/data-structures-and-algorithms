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



  ## API

  The methods available to my Stack are:
- `.insert(value)`
- `.includes(value)`
- `.toString()`
- `.append(value)`
- `.insertBefore(value, newVal)`
- `.insertAfter(value, newVal)`
- `.kthFromEnd(k)`
  
  The methods available to my Queue are:

  

#### `.insert(value)`

This method takes a value as an argument. It creates a new node and points it at the existing head. Then it assigns the head property the the new node making it the new head. If there is no head present when the method is called it simply makes the new node the head.

#### `.includes(value)`

This method takes in a value as an argument. It then traverses the Linked List utilizing a while loop checking the value against the value of each subsequent node in the list and returns `true` if it finds a match. If the value is not found before the loop ends it returns `false`.

#### `.toString()`

 This method takes no arguments. It creates an empty string and then traverses the Linked List utilizing a while loop. Each time through the loop, it adds the current node's value to the string as `{${current.value}} -> `. Upon completing the loop it adds `NULL` to the end of the string and then returns the string as a sort of visual representation of the Linked List and its contents.

 #### `.append(value)`

 This method takes in a value as an argument. It creates a new node with that value and then traverses the Linked List until it reaches the last node. Upon reaching the last node it points that node's `.next` at the newly created node, extending the list. If the head node does not exist, the newly created node becomes the new head.

 #### `.insertBefore(value, newVal)`

 This method takes in a value and a new value(newVal). If the value of the existing head matches the value argument, the `.insert(value)` method is called with an argument of (newVal) to insert a new node in the head position with a value of newVal. Otherwise, a new node is created with a value of newVal and then the Linked List is traversed until a node with a `.next` value that matches the value argument is reached. The new node's `.next` is set to the current node's `.next` and then the current node's `.next` is set to the new node, thereby inserting the node into the correct position in the list. If the value supplied as an argument does not exist within the Linked List, `'Exception'` is returned instead.

 #### `.insertAfter(value, newval)`

 This method takes in a value and a new value(newVal). A new node is created with a value of newVal and then the Linked List is traversed until a node with a value that matches the value argument is reached. The new node's `.next` is set to the current node's `.next` and then the current node's `.next` is set to the new node, thereby inserting the node into the correct position in the list. If the value supplied as an argument does not exist within the Linked List, `'Exception'` is returned instead.

 #### `.kthFromEnd(k)`

 This method takes in a positive number (k) as an argument. The length of the list is checked first. If it is only one node it advises the user and returns the single value in a string. If the number is found to be less than 1, an `'Exception'` is returned. Two pointers `marker` and `current` are initially set to the head node. A for loop is used to advance the `marker` pointer along the nodes of the list until it reached the nod with the value of 'k'. If the list has fewer nodes than the value of 'k', an `'Exception'` is returned. After exiting the for loop the value of `marker` is checked. If it's value is null then 'k' is the same length as the list and an `'Exception'` is returned. Otherwise with both pointers starting at their current values, a while loop is implemented to run until the value of `marker` becomes null, signifying the end of the list. At that point `current` will be 'k' nodes behind it because in the loop both pointers increment. Finally, the value of `current` is returned.

 ## Solution
[stacks-and-queues](stacks-and-queues.js)

![linked-list challenge 7 whiteboard](../../assets/linked-list-challenge-7.png)
