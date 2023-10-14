/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.
You may not mutate the original array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.

input arr and cb function
output an arr

plan:
initialize a res array
iterate through array
for each element check if the element passed into the call back is truthy, if so push the output of the callback to a result array
return array
***********************************************************************/

function pickyMyMap(arr, cb) {
	const res = [];

	for(let i = 0; i < arr.length; i++){
		let el = arr[i];
		if(cb(el)){
			res.push(cb(el))
		}
	}
	return res;
}

// const nums = [1, 2, 3, 4];
// console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]

// const booleans = [true, false, true, false, true];
// console.log(pickyMyMap(booleans, (boolean) => !boolean)); // [true, true]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
