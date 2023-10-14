/***********************************************************************
Write a function called `shoppingList(list)`. The shoppingList function will
take in a starting list as an array and return a new function that will allow
us to add to the list. When that return function is invoked with an
argument, it will add the argument to the list and return the list.


Look below to see how this function is invoked:

const groceryList = ['eggs']
const addToGroceryList = shoppingList(groceryList); // returns a function
addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup']

const clothesList = []
const addToClothesList = shoppingList(clothesList);
addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']

input array
output function
  - input a string IE grocery item
  - output an array with the list item added along with anything added before


  - return a function
   - inner function, push inputed item into the array passed in in the other function
   - return the array.
***********************************************************************/

function shoppingList(list) {
  
  return (item) =>{
    list.push(item)
    return list
  }
}

// const groceryList = ['eggs']
// const addToGroceryList = shoppingList(groceryList); // returns a function
// addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup']
// console.log(groceryList);

// const clothesList = []
// const addToClothesList = shoppingList(clothesList);
// addToClothesList('tshirt'); // returns ['tshirt']
// addToClothesList('pants'); // returns ['tshirt', 'pants']
// console.log(clothesList); // ['tshirt', 'pants']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shoppingList;
