# `S1W3D4`

## [Back to Study Guide](../../../../study-guides/2-assessment.md)

## Destructuring Discussion

- Destructuring is just matching a pattern.

  ```js
  let animals = ["dragon", "panda", "gorilla", "lion"]
  
  // instead of doing this:
  // let firstAnimal2 = animals[0]
  // let firstAnimal3 = animals[1]
  // let firstAnimal4 = animals[2]
  // let firstAnimal5 = animals[3]
  
  let [firstAnimal, secondAnimal, thirdAnimal] = animals; //firstAnimals variable holds the first animal "dragon";
  
  console.log("firstAnimal:", firstAnimal);
  console.log("secondAnimal:", secondAnimal);
  
  let cohort = {
    startMonth: "May",
    instructors: [{
      name: "Philip",
      currentGames: [
        "Matroid Prime Remastered",
        "Assassin's Creed Mirage",
      ],
    }, {
      name: "Alan",
      currentGame: "Baldur's Gate 3",
      hours: 100,
    }],
  }
  
  //what is the value of the variable `startMonth`?
  let { startMonth } = cohort;
  console.log("startMonth: ", startMonth);


  //given this cohort obj, destructure the "instructors" and give instructors an alias of `teachers`
  let { instructors:teachers } = cohort;

  console.log("teachers: ", teachers);

  //given this cohort obj, destructure the object inside of instructors array
  let { instructors: [Philip, Alan] } = cohort;
  
  console.log("Philip: ",  Philip);
  console.log("Alan: ", Alan);
  ```

## Rest and Spread

- Rest takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let makeThemBig = function (...strings) {
    return strings;
  };
  
  console.log(makeThemBig("hello", "world"));
  console.log(makeThemBig("hello"));
  console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));
  ```

- Spread takes some data and 'spreads' it out of its containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  
  console.log(arr3);
  console.log(arr4);
  
  let obj1 = { name: "Obi-Wan Kenobi" };
  let obj2 = { master: "Qui-Gon Jinn", apprentices: ["Luke", "Anakin"] };
  let obj3 = { obj1, obj2, gender: "male" };
  let obj4 = { ...obj1, ...obj2, gender: "male" };
  
  console.log(obj3);
  console.log(obj4);
  ```

---
