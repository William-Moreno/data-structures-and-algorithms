# Hashtables

Create a simple Hashtable with methods to hash a key, add a key/value pair, check for the existence of a key within the hashtable and to get the value associated with a provided key from the hashtable.

## Challenge

Implement a Hashtable with the following methods:

- `add(key, value)`: takes in a key and value, hashes the key and add the pair to the table handling any collisions
- `get(key)`: takes in a key and returns the value from the table
- `contains(key)`: takes a key and returns a boolean indicating whether the key is present in the hashtable already
- `hash(key)`: takes in a key and returns an index to the collection

Write tests to prove expected functionality

## Approach & Efficiency

1. Created classes to create Node, LinkedList and HashTable objects
1. Wrote functions to append nodes to LinkedList and to check LinkedLists for values
1. Wrote functions to hash keys, add key/value pairs, get values and check for keys in the hashtable
1. Wrote tests to verify functionality

### Time and Space Complexity

Both Time complexity and space complexity for the operations we are performing are: **O(1)**

## API

The methods available to the LinkedList are:
- `.includes(value)`
- `.append(value)`

The methods available to the HashTable are:
- `.hash(key)`
- `.add(key, value)`
- `.contains(key)`
- `.get(key)`

### LinkedList

#### `.includes(value)`

This method takes in a value as an argument. It then traverses the Linked List utilizing a while loop checking the value against the value of each subsequent node in the list and returns `true` if it finds a match. If the value is not found before the loop ends it returns `false`.

 #### `.append(value)`

 This method takes in a value as an argument. It creates a new node with that value and then traverses the Linked List until it reaches the last node. Upon reaching the last node it points that node's `.next` at the newly created node, extending the list. If the head node does not exist, the newly created node becomes the new head.

 ### HashTable

 #### `.hash(key)`

 This method takes in a `key` argument and uses an algorithm to hash the the `key` in order to find the proper index/bucket in the hashtable 'array'.

 #### `.add(key, value)`

 This method takes in a `key` and a `value`. `.hash()` is called on the `key` and then the corresponding bucket is checked. If its value is currently null, a LinkedList is created in the bucket and a node containing the key/value pair is instantiated and added to the head of the new list using `.append(value)`. If there is already a value in the indicated bucket, a collision occurs. A new node is created using the key and value and then that node is added to the LinkedList with the `.append(value)` function.

 #### `.contains(key)`

 This method takes in a `key` and calls `.hash(key)` on it. The LinkedList in the bucket at the indicated index is checked using the `includes(value)` function. If the key exists in the bucket at the specified index, the boolean, `true` is returned. If there is no value/LinkedList in the bucket at that location, or if the key does not exist in the LinkedList residing there, the boolean `false` is returned instead.

  #### `.get(key)`

 This method takes in a key and hashes it. The corresponding bucket is checked. If there is no LinkedList, `null` is returned. If there is a LinkedList in the location, `.includes(value)` is used to traveres it and look for a node with the `key` provided. If the key is found in a node on the LinkedList, the associated value is returned. If the key is not present, a value of `null` is returned.

 ## Solution
[hashtable](hashtable.js)

![hashtable whiteboard](../assets/hashtable.png)