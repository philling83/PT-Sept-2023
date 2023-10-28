/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

input array of lowercase strings and a empty counter obj.
output char -> vowel that appears the most in all words in the inputted array.

plan:
base case : words array length === 0, return char

recursive case : words length !== 0, we are going grab element, and record its vowels into our counter obj as k/v pairs.

recursive step: slice off first element in the array

base case:
  - initalize a maxCount to hold the most frequent number of vowel initialize as -Infinity, and maxChar to hold the vowel, initialize as an empty string ""
  - iterate through counter obj
    - check each k/v pair against the max count if its greater or not.
    - if it is greater update the maxCount, with the current value, and update maxChar with the current key.
  - return maxChar

- take first word in array, then iterate through the word, and check if each char exists if its a vowel as a key in counter obj.
  - if it does not exist in our counter obj, we will initialize a key as the char, and its value as 1.
  - if it does, just increment the k/v in counter obj.

- return a recursive call while passing in the array with the first value sliced out, and the updated counter obj.

***********************************************************************/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const findVowels = (word, counter) => {
  let wordArr = word.split('')

  wordArr.forEach(char => {
    if (VOWELS.includes(char)) {
      if (!counter[char]) {
        counter[char] = 1;
      }
      else {
        counter[char]++;
      }
    }
  })

  return counter;
}


const mostFrequentVowel = function (words, counter = {}) {
  if (words.length === 0) {
    let maxCount = -Infinity;
    let maxChar = '';

    for (let char in counter) {
      if (counter[char] > maxCount) {
        maxCount = counter[char];
        maxChar = char;
      }
    }
    return maxChar
  }
  findVowels(words[0], counter)

  return mostFrequentVowel(words.slice(1), counter)
}

// console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse'])); // 'o'
// console.log(mostFrequentVowel(['dog', 'cow', 'pig', 'chicken'])); // 'i' or 'o'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
