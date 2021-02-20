# Linked List Implementation

Implement a Linked List, and functions that allow us to append a node to the head position, search the list for a particular value and to output a string that illustrates the nodes of the entire list.

## Challenge

Create Node and LinkedList classes that include a head property and upon instantiation create an empty Linked List. Create three different methods to insert a node to the head postion, search the list for a specified value's presence and to print a string representing all of the nodes in the Linked List.

## Approach & Efficiency

- I first wrote the classes for Node and LinkedList
- I wrote the search function next
- Checked it with console.log
- I wrote the toString function next
- Checked it with console.log
- I wrote the insert function last
- Then I checked it's functionality with an empty and not empty list utilizing the first two functions I wrote
- Then I wrote the test suite for the code to check for all of the required functionality

## API

The methods available to my LinkedList are:
- `.insert(value)`
- `.includes(value)`
- `.toString()`

#### `.insert(value)`

This method takes a value as an argument. It creates a new node and points it at the existing head. Then it assigns the head property the the new node making it the new head. If there is no head present when the method is called it simply makes the new node the head.

#### `.includes(value)`

This method takes in a value as an argument. It then traverses the Linked List utilizing a while loop checking the value against the value of each subsequent node in the list and returns `true` if it finds a match. If the value is not found before the loop ends it returns `false`.

#### `.toString()`

 This method takes no arguments. It creates an empty string and then traverses the Linked List utilizing a while loop. Each time through the loop, it adds the current node's value to the string as `{${current.value}} -> `. Upon completing the loop it adds `NULL` to the end of the string and then returns the string as a sort of visual representation of the Linked List and its contents.