function linearSearch (arr, target) {

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let highIndex = arr.length - 1;
  let lowIndex = 0;

  // While high and low indices do not overlap...
  while (lowIndex <= highIndex) {
    // Find the midpoint between high and low indices
    let midPointIndex = Math.floor((highIndex + lowIndex) / 2)

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
  if(arr[midPointIndex] === target) return midPointIndex
      // Return the midpoint index
    // If the target is higher than the midpoint...
    if (arr[midPointIndex] < target) {
      // Move the low pointer to midpoint + 1
      lowIndex = midPointIndex + 1;

    }
    else {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      highIndex = midPointIndex - 1;

    }

  }

  return -1
  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]
