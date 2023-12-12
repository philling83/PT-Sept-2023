const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
};

function degreesOfSeparation(start, end) {
  let queue = [[start]];
  let visited = new Set([start]);
  
  while (queue.length > 0) {
    let currPath = queue.shift();
    let last = currPath[currPath.length - 1];
    
    if (last === end) {
      return currPath.length - 1;
    };
    
    adjList[last].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(currPath.concat([neighbor]));
        visited.add(neighbor);
      };
    });
  };
  
  return false;
};

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false