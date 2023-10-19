# `S1W2D3`

## Helper Functions
- Modularity
  - Breaks down complex tasks into smaller subproblems   
- Reusability
  - Eliminates the need to duplicate code
- Readability
  - Give descriptive labels to let developers know purpose / functionality
- Abstraction
  - Makes main function more concise and easier to understand
- Encapsulation
  - Modify / improve functionality in a single place

## Warm Up

```js
// You are given a 2-D array of nums. Find the subarray with the highest sum and return that sum. 
// The main block of code is written out for you. Try to refactor it to incorporate a helper function.

function findSum(arr) {

};

function highestSum(arr) {
  let highestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let sum = 0;

    for (let j = 0; j < subArr.length; j++) {
      let num = subArr[j];

      sum += num;
    };

    if (sum > highestSum) {
      highestSum = sum
    };
  };

  return highestSum;
};

console.log(highestSum([[1,2,3], [3,5], [2,5]]))  // 8
console.log(highestSum([[2,6,7], [1,5,6], [4,5]])) // 15
```
