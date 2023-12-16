function ageSort(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
};

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if ((a + b) % 2 === 0) {
      return a - b;
    } else if (a % 2 === 0) {
      return 1;
    } else {
      return -1;
    };
  });
};

function validAnagrams(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));

    if (baseA === baseB) {
      return a - b;
    };

    return baseB - baseA;
  });
};

function frequencySort(arr) {
  const frequencyCount = {};

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];

    if (!frequencyCount[ele]) {
      frequencyCount[ele] = 1;
    } else {
      frequencyCount[ele] += 1;
    };
  };

  return arr.sort((a, b) => {
    if (frequencyCount[a] === frequencyCount[b]) {
      return b - a;
    } else if (frequencyCount[a] > frequencyCount[b]) {
      return 1;
    } else {
      return -1;
    };
  });
};

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];