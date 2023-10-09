# `S1W4D1`

## First Class Functions

- First Class Function | MDN: [First-class Function]

  1. Stored in a variable (last week)
  2. Passed as an argument to a function (today)
  3. Returned from a function (Later this week)

- Stored in a variable

  ```js
  let func1 = function(){
    console.log('I\'m stored in a variable');
  };

  console.log(func1());
  ```

- Passed as an argument to a function

  ```js
  let higherOrderFunction = function(callback){
    callback();
  };

  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };

  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }

  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);
  ```

- Returned from a function (Later this week)

---
