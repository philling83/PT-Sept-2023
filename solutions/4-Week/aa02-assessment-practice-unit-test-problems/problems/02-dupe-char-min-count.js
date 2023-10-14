/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

countChar helper function
input -> string
output -> obj with key as char and value their count

plan:
- convert string to array.
- iterate through array.
- check if key exists in res obj, if so add one to value, if not initialize key/val pair to 1.

main function
input -> string, minCount
output -> array of char that have a count equal or greater than minCount
- init a blank res array.
- call helper function to get obj of char count
- iterate through object using for in
- check each key val pair, if equal or greater than the minCount push key to res array.
***********************************************************************/

function countCharacters(string) {
	let strArr = string.split('');
	let res = {};

	strArr.forEach(char =>{
		if(!res[char]){
			res[char] = 1;
		}
		else{
			res[char]++;
		}
	})

	return res;
}


function duplicateCharMinCount(string, minCount) {
	let res = [];
	let objCount = countCharacters(string);
	for(let key in objCount){
		if(objCount[key] >= minCount){
			res.push(key);
		}
	}
	return res;
}

// console.log(duplicateCharMinCount("apple", 2)) // ["p"]
// console.log(duplicateCharMinCount("banana", 2)) // ["a", "n"]
// console.log(duplicateCharMinCount("What about a longer string?", 3)) // ["a", "t", " "]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
