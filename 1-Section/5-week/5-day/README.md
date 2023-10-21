# `S1W5D5`

## Function Hoisting

Similar to how JS can hoist variables it can also hoist functions.

- Variable Hoisting

```js
//var
const withVar = () => {
  console.log(animal);
  var animal = "Cat";
};

withVar(); // undefined

//const

const withConst = () => {
  console.log(animal);
  const animal = "Dog";
};

withConst(); // Reference Error
```

- Function Hoisting

```js
// function declaration

hello(); // hello

function hello() {
  console.log("hello!");
}

// function expression

_hello(); // Reference Error

let _hello = function () {
  console.log("hello!");
};

// function expression with var

__hello(); // Type Error

var __hello = function () {
  console.log("hello!");
};

// function declaration with var

var foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // I am a variable

// function declaration with let/const

let foo = "I'm a variable";

function foo() {
  return "I'm a function";
}

console.log(foo); // Syntax Error
```

## IIFEs (Immediately Invoked Function Expressions)

The two important pieces of an IIFE. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```js
(function () {
  console.log("I run immediately");
})();
```

- Primarily used to avoid polluting the global namespace
- Useful for situations where you only need a function to run once

## Truthy and Falsy

Falsy Values

|       |           |
| ----- | --------- |
| 0     | -0        |
| 0n    | ""        |
| null  | undefined |
| false | NaN       |

Everything else is Truthy;
