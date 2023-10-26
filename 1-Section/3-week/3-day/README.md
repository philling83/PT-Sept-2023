# `S1W3D3`

## [Back to Study Guide](../../study-guides/2-assessment.md)

## Arrow Functions

- Shorthand to define functions
- Binds context (Take a look at later)

```js
// Function Declaration
function declared() {
  // logic
};

// Function Expression
let expressed = function() {
  // logic
};

// Arrow Function
let arrowFunc = () => {
  // logic
};

// If arrow func only has 1 param
// No parentheses is needed around params
let arrowFunction = param1 => {
  // logic
};

// If arrow func only has a single expression code block
// Allows for implicit returns
let arrowFunc = (param1, param2) => param1 + param2;
```

## Primitive VS Reference

`Primitive`

  ```js
  let age = 10;
  let year = age;
  age = year + 1;
  console.log(age, year);
  ```

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

|RAM|VAR|VAL|
|--|--|--|
|#001|age|10|
|#002|year|10|

</td><td>

|RAM|VAR|VAL|
|--|--|--|
|#001|age|11|
|#002|year|10|

</td></tr> </table>

`Reference`

  ```js
  let biff = {
      type: 'dog',
      age: 10,
  };

  let buster = biff;
  buster.age = 0;

  console.log(biff, buster);
  ```

  <table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

|RAM|VAR|VAL|
|--|--|--|
|#003|biff|--|
|\||type|'dog'|
|\||age|10
|#004|buster|#003|

</td><td>

|RAM|VAR|VAL|
|--|--|--|
|#003|biff|--|
|\||type|'dog'|
|\||age|0
|#004|buster|#003|

</td></tr> </table>
