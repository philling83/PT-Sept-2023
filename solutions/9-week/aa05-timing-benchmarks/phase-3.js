const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    let startTime = Date.now();
    sums.push(addNums(n));
    let endTime = Date.now();

    console.log(`${endTime - startTime}`);
  };

  return sums;
};


function addManyNums10Timing(increment) {
  const sums = [];

  for (let n = increment; n <= 10 * increment; n += increment) {
    let startTime = Date.now();
    sums.push(addManyNums(n));
    let endTime = Date.now();

    console.log(`${endTime - startTime}`);
  };

  return sums;
};


n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
