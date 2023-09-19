# `S1W1D2`

## console.log(...)
This is a way to output the expression inside the parentheses of the console.log into the terminal.  

<span style="color:#cd1d1d;">**NOTE**: </span> In **real world** applications, **console.log** should be used for **debugging purposes only**. Debugging means to locate and solve errors in your code. **console.log** is **mostly used** as a way to **locate the error(s)** in your code.

```javascript
console.log("Hello world");
console.log("Hello world", "Hi aliens"); //Hello world Hi aliens
console.log("one plus one is:", 1+1) //one plus one is: 2
```

## Comments
Occasionally we'll want to leave comments or notes in our code. Commented lines will be ignored by our computer. 

### Single-Line Comments

```javascript
//this is a comment. javascript will ignore me )':
console.log("This is not a comment"); //this is a comment though...
```


### Multi-Line Comments
 /* and ending the comment with an asterisk and a forward slash, */.
 ```javascript
/*
multi-line comments:
comment 1
comment 2
*/
console.log('end!')
```
## Variables
- Variables are used to store information 
- To be referenced and manipulated in a computer program.
- Containers that point to data

### Initializing Variable

- Four parts of a variable
  - `let varName = "value";`
  - `let`: Initialization keyword
  - `varName`: name
  - `=`: assignment operator
  - `"value"`: value
  - name_of_variable cannot begin with a number

```javascript
let bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'

let birthYear = 2012;
console.log(birthYear); // 2012

// let 12num = 12; //<-- invalid, cannot start with 12 for var name.
```

### Declaring a Variable (not assigning)
- In JavaScript, in order to use a variable, we must declare it.
- To declare a variable, use the let keyword, then name of variable
- `let` declarations will initially be `undefined`

```javascript
let bootcamp; //we declared but NOT ASSIGNED `=` to any value
console.log(bootcamp); // undefined
```

### Assigning a Variable (=)
- after declared, variable can be assigned
```javascript
let bootcamp;
console.log(bootcamp); // undefined
bootcamp = "App Academy";
console.log(bootcamp); // 'App Academy'
```

### Manipulating a Variable (reassign =)
- To change the value of a variable, we need to reassign it to a new value with =
```javascript
let num = 42;
console.log(num + 8); // => 50
console.log(num); // => 42

num = num + 10;
console.log(num); // => 52
```

### Assigmment Shorthand
common examples:
```javascript
let number = 0;
number += 10; // equivalent to number = number + 10
number -= 2; // equivalent to number = number - 2
number /= 4; // equivalent to number = number / 4
number *= 7; // equivalent to number = number * 7
console.log(number); // 14
```

### Postfix / Prefix (`++` and `--`):
```javascript
let year = 3004;
console.log(year++); // 3004
console.log(year);   // 3005
console.log(--year); // 3004
```
## Working w/ Numbers

### Number Datatype
Examples of numbers below:
```javascript
let integer = 50
let negative = -50
let decimal = 3.14159;
```

### Arithmetic Operators
![](https://i.imgur.com/oYebL9Z.png)

Order of Operations: P.E.M.D.A.S. (Parentheses, Exponents, Multi / Division / Modulo, Add / Subtract)

Examples:
```javascript
console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125
console.log((2 + 3) * 5); // => 25

let add_my_num = 10 + 5 * 2;
console.log(add_my_num); //20
```

### Modulo
- Modulo gives us the **remainder** that **results from** a **division**.
- For example: **10 % 3 is 1** because when we divide **10 by 3**, we are **left with a remainder of 1**.

```javascript
console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7

// modulo has precedence over addition
console.log(4 + 12 % 5); // => 6
console.log((4 + 12) % 5); // => 16 % 5 => 1 (5 goes into 16 3 times w/ remainder of 1)
```
### NaN (Not a Number)
In general, any **nonsensical arithmetic** will **result in NaN**
```javascript
let num; //num = undefined
console.log(num + 3); // undefined + 3 --> NaN

let word = "hey";
console.log(word / 3); // NaN
```

## Working w/ Boolean

### Boolean Datatype
The Boolean data type is perhaps the simplest type since there are only two possible values, **`true`** and **`false`**.

### Logical Operators
Also known as boolean operators
![](https://i.imgur.com/rWYQc8R.png)


- **!(not)**
    - reverses boolean value
    - `!` is a `unary operator` (applied to only single value, `binary operators` are like `%` that accepts two values)
    ```javascript
    console.log(!true); // => false
    console.log(!false); // => true
    console.log(!!false); // => false
    ```

- **&&(and)**
    - will only evaluate to `true` when both input values are `true`
    - `&&` is a `binary operator` 
    ```javascript
    console.log(false && false); // => false
    console.log(false && true); // => false
    console.log(true && false); // => false
    console.log(true && true); // => true
    ```
- **||(or)**
    - will only evaluate to `false` when both input values are `false`
    - `||` is a `binary operator` 
    ```javascript
    console.log(false || false); // => false
    console.log(false || true); // => true
    console.log(true || false); // => true
    console.log(true || true); // => true
    ```
    
### Logical Order of Operation
JavaScript will evaluate `!` then `&&` then `||`.

```javascript
console.log(true || true && false);    // => true
console.log(false && !(false || true)); // => false
```

### De Morgan's Law
**Distribute !** across parentheses, we must also **flip** the operation **inside parentheses**

- `!(A || B)` is equivalent to `!A && !B`
- `!(A && B)` is equivalent to `!A || !B`

## Comparison Operators
**all comparisons** will **result** in a `boolean`, **true** or **false**

### Relative Comparators 
![](https://i.imgur.com/c33GLm6.png)

Relative Comparators examples:
```javascript
console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(1 < 7); // => true
console.log(7 <= 7); // => true
console.log(5 === 6); // => false
console.log(5 !== 6); // => true
console.log("a" !== "A"); // => true
console.log(false === false); // => true
```

Lexigraphical String Comparison:
```javascript
console.log("a" < "b"); // => true
console.log("apple" < "abacus"); // => false
console.log("app" < "apple"); // => true
console.log("zoo" > "mississippi"); // => true
```

### === vs ==
- **strict equality** --> `===` 
    - **only** return **true** if the **types** are the **same**
- **loose equality** --> `==`
    - **can** return **true** even if the values are of **different types**

```javascript
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); //true
```

## Expressions

An expression is a statement that when evaluated returns a value.

`1 + 2` after evaluation equals `3` <br>
`true && false` after evaluation equals `false`