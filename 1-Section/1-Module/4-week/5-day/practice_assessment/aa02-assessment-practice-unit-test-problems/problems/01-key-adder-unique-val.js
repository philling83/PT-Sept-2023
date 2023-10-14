/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

input -> obj, key, val
output obj with new key/val only if there were no other keys with the inputted val

plan
- initialize bool hasVal to false
- iterate through object using for of loop
- each iteration check if the inputted val is equal to current val
- if there is a match set hasVal to true
- if hasVal is true, return object
- if hasVal is false add new key/val pair to obj and return it
***********************************************************************/

function keyAdderUniqueVal(object, key, value) {

	for (let key in object) {
		if (value === object[key]) {
			return object
		}
	}
	object[key] = value
	return object
}
let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
// console.log('test');
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
