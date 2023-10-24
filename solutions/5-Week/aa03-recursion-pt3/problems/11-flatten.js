/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // With iteration
  let newArray = [];

  arr.forEach(function (contents) {
    if (Array.isArray(contents)) {
      newArray.push(...flatten(contents));
    } else {
      newArray.push(contents);
    };
  });

  return newArray;

  /* ---------------------------------------------------------------------------------------------------- */

  // // No iteration
  // if (arr.length === 0) {
  //   return [];
  // };

  // let shifted = arr[0];

  // if (Array.isArray(shifted)) {
  //   return [...flatten(shifted), ...flatten(arr.slice(1))];
  // } else {
  //   return [shifted, ...flatten(arr.slice(1))];
  // };

  /* ---------------------------------------------------------------------------------------------------- */

  // // With ternary operator
  // if (arr.length === 0) {
  //   return [];
  // };

  // let shifted = arr[0];

  // return [...(Array.isArray(shifted) ? flatten(shifted) : [shifted]), ...flatten(arr.slice(1))];
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
