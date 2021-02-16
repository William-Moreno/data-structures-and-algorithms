# Reverse an Array

Create a function that takes in an array as an argument and returns an array containing the same elements in reversed order. Then use `module.exports` to export the function as a module.

## Challenge

The challenge is to write a function which takes an array as an argument, and without using any built-in/prototype methods available in JavaScript, return an array with the elements in reversed order.

## Approach & Efficiency

The approach I took was to create an empty array and then *push* the individual elements into that array as I iterated through the original array backwards utilizing a *'for loop'*. Once the loop is complete, the new array is returned.

I chose to iterate backward and `push` elements into the new array because it should be faster than iterating forward and `shift`-ing values into an array.

## Solution

```JavaScript
const reverseArray = (arr) => {
  const reversedOrder = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversedOrder.push(arr[i]);
  }
  return reversedOrder;
};
```



