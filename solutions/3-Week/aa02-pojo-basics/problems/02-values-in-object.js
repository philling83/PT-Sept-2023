/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Option 1
  let vals = [];

  for (let key in obj) {
    let val = obj[key];

    vals.push(val);
  };

  return vals;

  // // Option 2
  // return Object.values(obj);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
