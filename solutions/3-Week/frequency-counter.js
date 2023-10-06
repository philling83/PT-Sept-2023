/*
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' 
are both the most common, return 'a' because it is closest to the beginning of the alphabet). 
Be sure to exclude spaces when counting characters.
*/

const mostCommonChar = sentence => {
  // Option 1 (Eliminate spaces)
  // let words = sentence.split(" ");
  // let noSpaces = words.join("");
  let letterCounter = {};
  let maxCount = 0;
  let maxLetter;
    
  // for (let i = 0; i < noSpaces.length; i++) {
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    
    // Option 2 (Eliminate spaces)
    if (letter === " ") {
      continue;
    } else if (letterCounter[letter] === undefined) {
      letterCounter[letter] = 1;
    } else {
      letterCounter[letter]++;
    };
  };
    
  for (let key in letterCounter) {
      let count = letterCounter[key];
      
    if (count > maxCount) {
      maxCount = count;
      maxLetter = key;
    } else if (count === maxCount) {
      if (key < maxLetter) {
        maxLetter = key;
      };
    };
  };
    
  return maxLetter;
};

console.log(mostCommonChar(sentence));           //  "t"