/*
Given a sequence, seq, write a function that returns true if the sentence 
can be rearranged into a palindrome and false if not. Ignore whitespace 
and assume all characters are lowercase.

Note: A palindrome is a sequence that reads the same backwards as it does
forwards.
*/

const isPalindrome = seq => {
  let map = {};

  for(let char of seq) {
    if(char === ' ') continue;
    
    if(map[char]) {
      delete map[char];
    } else {
      map[char] = 1;
    };
  };

  return Object.keys(map).length < 2;
};