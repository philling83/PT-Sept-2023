function isFive(num) {
  return num === 5;
};

function isOdd(number) {
  if (typeof number !== "number") {
    throw Error("some error");
  };

  return number % 2 !== 0;
};

function myRange(min, max, step = 1) {
  const array = [];

  for (let start = min; start <= max; start += step) {
    array.push(start);
  };

  return array;
};

module.exports = { isFive, isOdd, myRange };
