# `S1W4D3`

## Scope

- What is scope?
  - Scope determines what variables are available for use within any given line
    of a JavaScript program.

- Advantages of Using Scope Correctly
  - `Security` - Restricting variables to only predefined sections of a program.
  - `Avoiding Namespace Collisions` - Allows you to reuse variables
    names in different scopes without causing errors.

- Three types of scope
  - `Global` - Variables defined in the global scope.
    - Everything in js is an object. When running js in the browser the global
      scope represents the window when running js locally (Node) it represents the
      global object.
    - If you initialize a variable without a declaration it defaults to the
      global scope. **In Node, it is scoped locally to the module/file*
  - `Local or Function` - Global, Parameters, Variables in the function
  - `Block`- Global, Local, Variables in the block

---

```js

let globalScope = 'I am globally scoped'

let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped"

  if(!functionScope){
    let blockScope = "I am block scoped"
  };
};

myFunction("I am function scoped");

```

---

```js
let car = "vroom";
function makeSounds(dogSound) {
  let cow = "moo";

  if (true) {
    let turkey = "gobble";

    for (let i = 0; i < 2; i++) {
      console.log(car, dogSound, cow, turkey, i);
    }
  }
}
makeSounds("woof");
```

---

- Scope Chaining
  - JS will search through scopes, working upwards until it finds a match.
    - Inner scopes have access to outer scopes but outer scopes don't have
      access to inner scopes

```js
let hungry = false;

function sayHungry() {
  let hungry = true;
  if (hungry) {
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}

sayHungry();
```

- Hoisting
  - "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope (figuratively not physically) before code execution."
  - In reality - JavaScript engine is not physically moving your code, your code stays where you typed it.
  - During compile phase, just microseconds before your code is executed, it is scanned for function and variable declarations. All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment.
    - The variables and function declarations will be hoisted to the top of their particular scope.
    - `const` and `let` are **block-scoped** while `var` is **function-scoped**.

### `Let, Const, and Var`

- `Let` is block scoped and CAN be reassigned.
- `Const` is also block scoped, but CANNOT be reassigned.
- reassign !== mutable
- `Var` is function scoped, and CAN be reassigned.
- `Temporal Dead Zone` The state where variables are un-reachable. They are in scope, but they aren't initialized.

|       | declaration | assignment  |  initialization  |  scope   |        hoisting        |
| :---: | :---------: | :---------: | :--------------: | :------: | :--------------------: |
|  var  |   var x;    | x = 'Toby'; |  var x = 'Tom';  | function | declared; not assigned |
|  let  |   let x;    | x = 'Toby'; |  let x = 'Tom';  |  block   |   Temporal Dead Zone   |
| const |             |             | const x = 'Tom'; |  block   |   Temporal Dead Zone   |

---

## Closures

- What is Closure?
  - A concept that allows inner functions to access the scope of outer functions
  - Even after the outer function has returned an output
  - Function bundled together with references to accessible variables

- Why?
  - Allows for data privacy
  - Maintaining state
  - Function factories

```js
const counterFactory = function(){
  let count = 0;
  
  //incrementor (inner func) is creating a CLOSURE around the 'count' variable.
  const incrementor = function(){
    return ++count;
  };

  return incrementor; //do not invoke! b/c it doesn't give us the function anymore if we ().
};

console.log(counterFactory);
console.log(counterFactory());

const updateCounter1 = counterFactory();
console.log("from counter1:", updateCounter1()); 
console.log("from counter1:", updateCounter1()); //2

// console.log(count); //will this work?

console.log("----------------Favorite Food Factory----------------")
//1) build a higher order function called `favoriteFoodDB` that will take into its parameter a prefix. 

const favoriteFoodDB = prefix => {
  //2) inside the favoriteFoodDB: initialize an empty array that will hold a list of foods
  let favFoods = [];

  //3) inside the favoriteFoodDB: DEFINE and RETURN an inner function (call it `innerFunc`) that will take in a food as its parameter and adds the food to the favFoods array (how do we add things to an array?)
  const innerFunc = food => {
    //innerFunc has access to favFoods and continuously updates it with each call. It also has access to the prefix parameter. CREATING A CLOSURE around those variables.
    favFoods.push(food);

    //4) inside the `innerFunc`: after pushing the food into the favFoods array, return the prefix with the favFoods after joining it with comma separated spaces. (see example below);
    return prefix + favFoods.join(", ");
  }
  // - remember to return the `innerFunc`
  return innerFunc;
};

const addFood = favoriteFoodDB("My favorite desserts are ") //--> returns the `innerFunc` inside and stores it in the `addFood` variable.
console.log(addFood("wings"));
console.log(addFood("burgers"));
console.log(addFood("chicken sandwiches")); //"My favorite desserts are wings, burgers, chicken sandwiches"
```
