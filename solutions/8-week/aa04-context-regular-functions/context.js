function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
eat(); // undefined eats fish food - `this` gets set to the global object


/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // Nemo eats fish food - `this` gets set to nemo instance


/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // undefined eats fish food - `this` gets set to the global object


/********************************* Scenario 4 *********************************/
nemo.swim(); // Nemo swimming in the water - `this` gets set to nemo instance


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // TypeError: Cannot read properties of undefined - context is lost and `this` is set to undefined
