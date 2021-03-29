# Hashtables

Write a function that returns the first word to occur more than once.

## Challenge

Without utilizing any in-built library methods available to our language, write a function that takes in a lengthy string parameter and returns the word within the string that first occurs more than once.

## Approach & Efficiency

1. Wrote a function that utilizes the HashTable data-structure previously written.
1. Refactored the `includes(value)` method of the `LinkedList` class associated with the `HastTable` class.
1. Refined the logic within the `repeatedWord(string)` function to convert to lowercase, remove punctuation with regex, and determine which word recurs first within the string when there are more than one repeated words
1. Wrote tests to verify functionality

 ## Solution
[Code](repeated-word.js)

![repeated-word whiteboard](../assets/repeat.png)