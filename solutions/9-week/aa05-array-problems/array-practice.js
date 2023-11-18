// Time Complexity: O(n)
// Space Complexity: O(1)
const findMinimum = arr => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
  };

  return min;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
const runningSum = arr => {
  let sum = 0;
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    res.push(sum);
  };

  return res;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
const evenNumOfChars = arr => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) count++;
  };

  return count;
};

// Time Complexity: O(n^2)
// Space Complexity: O(n)
const smallerThanCurr = arr => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;

      if (arr[i] > arr[j]) count++;
    };

    res.push(count);
  };

  return res;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
const _smallerThanCurr = arr => {
  const count = new Array(10).fill(0);  // Assuming the array elements are in the range 0-10
  const res = new Array(arr.length);

  // Count the occurrences of each element
  for (let num of arr) {
    count[num]++;
  };

  // Compute the count of elements smaller than each number
  for (let i = 1; i < 11; i++) {
    count[i] += count[i - 1];
  };

  // Generate the result array
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i] ? count[arr[i] - 1] : 0;
  };

  return res;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      };
    };
  };

  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
// Save time in exchange for space
const _twoSum = (arr, target) => {
  let diffObj = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let diff = target - num;

    if (diffObj[num]) {
      return true;
    } else {
      diffObj[diff] = num;
    };
  };

  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
const secondLargest = arr => {
  if (arr.length < 2) return undefined;

  let largest = Math.max(arr[0], arr[1]);
  let secondLargest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let val = arr[i];

    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest) {
      secondLargest = val;
    };
  };

  return secondLargest;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
const shuffle = (arr) => {
  const copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    let randomIndex = Math.floor(Math.random() * copy.length);

    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  };

  return copy;
};

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];