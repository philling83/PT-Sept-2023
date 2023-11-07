const FriendlyDragon = require("./classes/friendly-dragon");
const EvilDragon = require("./classes/evil-dragon");
const Dragon = require("./classes/dragon");

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
);

const smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
);

// You can also call the getDragons method on FriendlyDragon or EvilDragon
// because they both inherit that method from their parent class Dragon.
// Remember, a static method must be called on the class, NOT an instance of the
// class
const allDragons = Dragon.getDragons(falkor, smaug);
// const allDragons = FriendlyDragon.getDragons(falkor, smaug);
// const allDragons = EvilDragon.getDragons(falkor, smaug);

module.exports.allDragons = allDragons;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
