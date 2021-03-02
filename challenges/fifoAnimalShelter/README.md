# FIFO Animal Shelter
---

Create an AnimalShelter class which holds cats and dogs. Create methods that add either a cat or dog object, or return either the cat or dog in the or dog that has been in the shelter the longest.

## Challenge

- Create a `AnimalShelter` class to hold cats and dogs
  - create a `enqueue(animal)` method with a animal argument that adds a new cat or dog to the rear of the AnimalShelter queue
  - create a `dequeue(pref)` method that takes in a preference argument ('cat' or 'dog') and returns the first cat or dog from the AnimalShelter. If pref is not 'cat' or 'dog' either return null or return the animal that has been in the shelter the longest.

  ## Approach & Efficiency

- Created the AnimalShelter class which will utilize two Stacks.
- Created the `.enqueue(animal)` method for the class utilizing the two stacks and their `.push(value)` and `.pop()` methods
- created the `.dequeue(pref)` method for the class using a conditional to verify the AnimalShelter contains at least one value and if it does, searches for the first cat or dog in the shelter and then uses the `.pop()` method of the stack to remove and return it
- Created tests to verify functionality

  ## API

  The methods available to my PseudoQueue are:

- `.enqueue(animal)`
- `.dequeue(pref)`

#### `.enqueue(animal)`

This method first transfers all of the nodes from the "front" stack to the "back" stack by `.pop()`-ing from the former and `.push(tempValue)`-ing into the latter in order to reverse the order of nodes so that the rearmost node of the AnimalShelter is located on top of the "back" stack. At that moment, the `.push(value)` is used to add a node with the supplied value to the top of the "back" stack. Then, the transfer process is reversed using the same transportation system to reverse order of the nodes while moving them back into the "front" stack again.

#### `.dequeue(pref)`

This method first verifies that at least one value exists in the AnimalShelter. Using a while loop the front stack is traversed until an animal of the matching type is on the top. It then uses `.pop()` on the "front" stack of the AnimalShelter to return the correct animal. Any animals bypassed to find the first of a kind will then be returned to the top of the front stack in the order they were originally in. It will return an `'Sorry, the shelter is empty'` if the AnimalShelter is empty when `.dequeue(pref)` is called.

 ## Solution
[fifo-animal-shelter](fifo-animal-shelter.js)

![Whiteboard](../../assets/animal-shelter.png)