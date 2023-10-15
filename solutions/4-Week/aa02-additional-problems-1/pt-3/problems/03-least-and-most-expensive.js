/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The keys of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

function leastAndMostExpensive(catalog) {
  // Tracking just name
  const keys = Object.keys(catalog);

  const last = keys.pop();

  let least = last;
  let most = last;

  keys.forEach(key => {
    if (catalog[key] < catalog[least]) least = key;
    if (catalog[key] > catalog[most]) most = key;
  });

  return [least, most];

  /* --------------------------------------------------------------------- */

  // // Using an object to track price and name for each
  // let highestObj = { price: -Infinity, name: "" };
  // let lowestObj = { price: Infinity, name: "" };

  // for (let [toy, price] of Object.entries(catalog)) {

  //   if (price > highestObj.price) {
  //     highestObj.price = price;
  //     highestObj.name = toy;
  //   };

  //   if (price < lowestObj.price) {
  //     lowestObj.price = price;
  //     lowestObj.name = toy;
  //   };
  // };

  // return [lowestObj.name, highestObj.name];
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = leastAndMostExpensive;
} catch (e) {
  module.exports = null;
}
