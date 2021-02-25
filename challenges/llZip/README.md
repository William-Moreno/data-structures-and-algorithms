# Linked List Implementation

Create a function that combines two linked lists into a single linked list that alternates values from each contributing linked list.

## Challenge

Create a function called `zipLists(list1, list2)` which takes two linked lists as arguments and zip the two linked lists together into one so that the nodes alternate between the two lists and return the zipped list Try to keep additional space down to O(1).

## Approach & Efficiency

- I imported my Node and LinkedList classes into the file
- I wrote the zipLists function first to simply alternate nodes and create a new list
- I wrote a test to check functionality
- I wrote a test to check for "zipping" lists of unequal length
- I wrote and refactored the additional code necessary to pass the test


## API

The imported module was `linked-list.js` which contained the following methods:
- `.insert(value)`
- `.includes(value)`
- `.toString()`
- `.append(value)`
- `.insertBefore(value, newVal)`
- `.insertAfter(value, newVal)`
- `.kthFromEnd(k)`

#### `function zipLists(list1, list2)`

This method takes in two linked lists as arguments. It creates a new empty linked list. Then two pointer variables are created, one for each of the two lists supplied as arguments, and they are set to the heads of their respective lists. A while loop is initiated that cycles as long as both pointers' targets are not `null` and uses the `.append(value)` method to add nodes to the end of the new list first from `list1` then `list2`. Once one or both of the pointers reach the end of their lists the loop ends and two additional while loops follow, one for each pointer. If there are remaining nodes on one list or the other, the corresponding loop continues to append them to the new list until both of the original lists are completed. The new linked list is then returned.


 ## Solution
[ll-zip](ll-zip.js)

![zipLists whiteboard](../../assets/ziplists.png)