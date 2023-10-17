/*
Least common flavor:
    Write a function that accepts an object that represents a bag of candy with various flavors
    The keys of the object are flavors, and the values are the count of how many pieces of that flavor
    are in the bag. The function should return the name of the flavor that is the least common.
    If passed an empty object, the function should return null.

    const bag1 = { cherry: 4, grape: 5, lemon: 3, orange: 2, berry: 4 };
    console.log(leastCommonFlavor(bag1)); // prints 'orange'

    const bag2 = { cherry: 5, grape: 4, lemon: 2, orange: 3, chocolate: 6 }
    console.log(leastCommonFlavor(bag2)); // prints 'lemon'

    console.log(leastCommonFlavor({})); // prints null
*/

function leastCommonFlavor(candyBag) {
  let candy = Object.keys(candyBag);

  // edge case
  if (!candy.length) return null;

  let leastCommon = candy[0];
  for (let i = 1; i < candy.length; i++) {
    if (candyBag[candy[i]] < candyBag[leastCommon]) {
      leastCommon = candy[i];
    };
  };

  return leastCommon;

  /* --------------------------------------------------------------------- */

  // // using an object to track
  // let res = { leastCommonFlavor: null, quantity: Infinity };

  // for (let flavor in candyBag) {
  //   if (candyBag[flavor] < res.quantity) {
  //     res.quantity = candyBag[flavor];
  //     res.leastCommonFlavor = flavor;
  //   };
  // };

  // return res.leastCommonFlavor;

  /* --------------------------------------------------------------------- */

  // // using destructuring and Object.entries
  // if (Object.values(candyBag).length < 1) return null;

  // let leastCommonName;
  // let leastCommon = Infinity;

  // for (let [flavor, count] of Object.entries(candyBag)) {
  //   if (count < leastCommon) {
  //     leastCommon = count;
  //     leastCommonName = flavor;
  //   };
  // };

  // return leastCommonName;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = leastCommonFlavor;
} catch (e) {
  module.exports = null;
}
