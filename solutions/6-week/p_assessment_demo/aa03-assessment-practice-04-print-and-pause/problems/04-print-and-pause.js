/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

input array of numbers
output print the number and delay for the same amount in ms

base case = array length is 0 return

recursive case / step
print first el
return setTimeout pass in our function as cb, first element as delay, slice first value off our input array



***********************************************************************/

function printAndPause(nums) {
  if (!nums.length) return;

  console.log(nums[0]);

  return setTimeout(printAndPause, nums[0], nums.slice(1));

}

// printAndPause([200, 800, 200, 800, 200, 800])
// 200
// // pause 200ms
// 800
// // pause 800ms
// 200
// // pause 200ms
// 800
// // pause 800ms
// 200
// // pause 200ms
// 800
// pause 800ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
