# Tree Intersection

Find common values in 2 binary trees.

## Challenge

- Write a function called `tree_intersection` that takes two binary tree parameters.
- Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach & Efficiency

1. Wrote a function `tree_intersection()` that utilized code I had previously written for Binary Trees
1. Refactored the `preOrder()` traversal method of the `BinaryTree` class to add an evaluation step before determining if a node value should be added to the resultant array
1. Added logic to return 'No values in common.' if the two trees passed into the function contain no common values
1. Created 3 sample tree to test with
1. Wrote tests to verify functionality

 ## Solution
[Code](tree-intersection.js)

![repeated-word whiteboard](../assets/intersect.png)