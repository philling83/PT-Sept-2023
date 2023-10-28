/***********************************************************************
Write a function called `eliminateType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept a string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with all elements
of the specified type removed.

Examples:

const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
smallEliminate('number'); // ['one', 'two', 'three']
smallEliminate('string'); // [1, 2, 3]

const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
eliminate('number'); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
eliminate('object'); // [2, undefined, 'world', true, 3, 'hello', false]


Hint: Remember Polya's problem solving framework!

1. Understand the problem
  * Read the problem carefully
  * Make sure you understand the examples
  * What should the returned function do?
  * Is this similar to any problems you have solved before?

2. Come up with a plan
  * Break this down into simpler steps
  * How would you write a function that eliminates all numbers from an array?
  * How would you write a function that eliminates all strings from an array?
  * How would you write a function that eliminates all booleans from an array?
  * How would you write a function that takes an array and a type and removes all values of the given type?
  * How do you write a function that returns a function?

3. Execute the plan
  * It may help to implement the intermediate steps from your plan first
  * It may help to try a brute-force solution first

4. Reflect, debug, test, refactor
  * If your tests aren't passing try coming up with your own test inputs
  * If your brute-force solution passess tests, try refactoring for simplicity
  * It's possible (not mandatory) to solve this in 1-3 lines of code!

  input array of varied elements with different data types
  output function that takes a string representing a data type
    - input string
    - output is an array that takes out all of the elements in the outer functions array that match the type

  plan
   return a function thats takes in a string
   initialize an empty array
   iterate through the copy of the array
    - check the type of each element if it matches the inputted type of inner function, do nothing, if it doesn't match push the element in the results array
    - return results array

***********************************************************************/

function eliminateType(arr) {
  return (type) => {
    let res = [];
    arr.forEach(el => {
      if (typeof el !== type) {
        res.push(el);
      }
    })
    return res;
  }
}

// const eliminateType = (arr) => (type) => arr.filter(el => typeof el !== type ? true : false)

// const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
// console.log(smallEliminate('number')); // ['one', 'two', 'three']
// console.log(smallEliminate('string')); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = eliminateType;
} catch {
  module.exports = null;
}
