/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'

input comma separated strings
output all strings put together in a sentence with a "!" at the end.

plan
define function with a rest param
return string interpolated with param joined with spaces and add a "!" at the end
***********************************************************************/

// const sentenceMaker = (...words) => `${words.join(' ')}!`
const sentenceMaker = (...words) => {
	return words.join(' ') + '!'
}

// console.log(sentenceMaker('Hello', 'World')); // 'Hello World!'
// console.log(sentenceMaker('I', 'love', 'coding')); // 'I love coding!'
// console.log(sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog')); // 'The quick brown fox jumps over the lazy dog!'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
