/*
Given the nested array of objects below, write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. 
If there is no second object, print null.
*/

const nestedArr = [
  [
    { a: 1 },
    { b: 2 }
  ],
  [
    { c: 3 },
    { d: 4 },
    { e: 5 }
  ],
  [
    { f: 6 }
  ],
  [
    { g: 7 },
    { h: 8 }
  ]
];

const getSecondObjValues = arr => {
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let secondVal = subArr[1];

    if (secondVal === undefined) {
      console.log(null);
    } else {
      let vals = Object.values(secondVal);

      console.log(vals[0]);
    };
  };
};

getSecondObjValues(nestedArr);               // 2 4 null 8