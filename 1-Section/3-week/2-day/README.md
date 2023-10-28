# `S1W3D2`

## [Back to Study Guide](../../../study-guides/2-assessment.md)

## Plain Old JavaScript Objects (POJOs)

`What are objects`

- An unordered collection of key-value pairs (properties / methods)
- Used to group related data and behaviors
- Mutable data type
- [*OBJECTS ARE UNORDERED*]

```js
// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

function costOfGroceries(groceries) {
  let cost = 0;
  
  for (let i = 0; i < groceries.length; i++) {
    let groceryItem = groceries[i];

    if (groceryItem === "butter") {
      cost += 1;
    } else if (groceryItem === "eggs") {
      cost += 2;
    } else if (groceryItem === "milk") {
      cost += 3;
    } else if (groceryItem === "bread") {
      cost += 4;
    } else if (groceryItem === "cheese") {
      cost += 5;
    };
  };

  return cost;
};

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

console.log(costOfGroceries(groceriesB));  // 13
console.log(costOfGroceries(groceriesA));  // 8
console.log(costOfGroceries(groceriesC));  // 9
console.log(costOfGroceries(groceriesD));  // 3
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time, we have dot notation.

```js
let obj = {
  first: 'a',
  second: 'b',
  third: 'c'
}

console.log(obj.first, obj['first']) //
```

`Using a variable`

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]); // 
console.log(obj[some + variable]); // 
console.log(obj[time.toLowerCase()]); //
```

```js
let cohort = {
  startMonth: "Sept",
  instructors: [{
    name: "Philip",
    currentArtists: [
      "Star Seed",
    ], 
  }, {
    name: "Alan",
    currentGame: "Baldur's Gate 3",
    hours: 50
  }],
}

//How would I print the starting month of the cohort from the object?

//How would I add a timezone, CST?

//How would I change hours played to 100?

//How would I add "ARMNHMR" to the currentArtists array?
```

`Checking if a key exists`

- obj[key] !== undefined
- key in obj

`Iterating over an Object`

- for in loop
- Object.keys
- Object.values
- Object.entries

`Why objects`

- Instant look up time
- Allows us a term/definition (key-value)
- Groups `like` information together

[*OBJECTS ARE UNORDERED*]: https://2ality.com/2015/10/property-traversal-order-es6.html
