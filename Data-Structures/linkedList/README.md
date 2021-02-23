# Linked List Implementation

Implement a Linked List, and functions that allow us to append a node to the head position, search the list for a particular value and to output a string that illustrates the nodes of the entire list.

Add functions to append nodes to the end of the list as well as insert nodes at specified places within the list.

Add a function that will return the value of a node that is a specified number of nodes from the end of the list.

## Challenge

Create Node and LinkedList classes that include a head property and upon instantiation create an empty Linked List. Create three different methods to insert a node to the head postion, search the list for a specified value's presence and to print a string representing all of the nodes in the Linked List.

Create three new methods to append nodes to the end of the list, add a node to the list prior to a node of a certain value and add a node to the list following a node of a specified value.

Create a method for the Linked List class which takes a number as a parameter and return the node's value that is that number from the end of the linked list.

## Approach & Efficiency

- I first wrote the classes for Node and LinkedList
- I wrote the search function next
- Checked it with console.log
- I wrote the toString function next
- Checked it with console.log
- I wrote the insert function last
- Then I checked it's functionality with an empty and not empty list utilizing the first two functions I wrote
- Then I wrote the test suite for the code to check for all of the required functionality

Building from the existing class, I followed the flow I used previously:
- I wrote the append function first
- Checked it utilizing the .toString() method and console.log
- I wrote the insertBefore function next
- Checked it utilizing the .toString() method and console.log
- I wrote the insertAfter function next
- Checked it utilizing the .toString() method and console.log
- I refined all three methods to function correctly if the specified node was the head or tail of the linked list
- I added an 'Exception' response when the specified node in the insertBefore and insertAfter functions did not exist within the linked list
- I wrote tests to verify functionality of the new methods and implemented them

Again working from the existing class, merely variations on the theme:
- I started be writing the basic kthFromEnd function
- I wrote a test to validate that the function was working properly
- I then wrote a tests for k too long and k the same length
- I modified the basic function to pass all three tests
- I then wrote tests for cases where the list was one node and when k was not a positive integer
- Then I modified the function to pass all tests written 

## API

The methods available to my LinkedList are:
- `.insert(value)`
- `.includes(value)`
- `.toString()`
- `.append(value)`
- `.insertBefore(value, newVal)`
- `.insertAfter(value, newVal)`
- `.kthFromEnd(k)`

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
[linked-list](linked-list.js)

![linked-list challenge 7 whiteboard](../../assets/linked-list-challenge-7.png)