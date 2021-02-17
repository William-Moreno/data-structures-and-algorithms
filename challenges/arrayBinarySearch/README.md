# Array Binary Search

Create a function that takes in a sorted array and a search key as arguments and returns the index of the array's elements that is equal to the search key. If the element does not exist return '-1'.

## Challenge

The challenge is to write a function which takes a sorted array and search key as arguments, and without using any built-in/prototype methods available in JavaScript, conducts a binary search for the search key among the array's elements. The index of the matching element should be returned, or if there is no match '-1' should be returned.

## Approach & Efficiency

The approach I took was to create variables for low index and high index and then derive a mid index variable from the first two variables. I then used a ***while*** loop to run as long as the search key did not match the value at the mid index and the mid index was not equal to the high index. Inside of the loop using *if/else* statements, I changed the values of either the low index or high index variable based on a comparison of the search key to the value at mid index. Then determined a new mid index value for the next pass through the loop. Once the loop completes, either the the correct index is returned or '-1' is returned, again using *if* statements.

## Solution
[array-binary-search](array-binary-search.js)

![array-shift whiteboard](../../assets/array-binary-search.PNG)