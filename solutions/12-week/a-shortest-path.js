const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  let queue = [[start]];
  let visited = new Set([start]);
  
  while (queue.length > 0) {
    let currPath = queue.shift();
    let last = currPath[currPath.length - 1];
    
    if (last === end) {
      return currPath;
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
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false