# Multi Bracket Validation


Create a function whach takes in a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced.

## Challenge

Write a function called `multiBracketValidation(input)` 
- the function should take in a string as its only input
- the function should check the balance of all three types of brackets in the string and:
  - return the `true` boolean if the brackets are balanced
  - return the `false` boolean if the brackets are not balanced

## Approach & Efficiency

- create an empty `Stack`
- iterate over the string checking each character in turn
  - if the current character is an opening bracket `push` it into the stack, making it the current top
  - if the current character is a closing bracket compare it to the character presently on the top
    - if the stack is empty, validation has failed
    - if they are not matching brackets, validation has failed
    - if they are matching brackets, `pop` the top character off the stack
  - after iteration check to see if the stack is empty
    - if it is, return `true`
    - if it is not, return `false`

## Solution

[multi-bracket-vaidation](./multi-bracket-validation.js)

![Whiteboard](../../assets/multiBracketValidation.png)
