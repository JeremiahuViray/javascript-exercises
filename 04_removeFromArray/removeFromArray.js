//const array = [1, 2, 3, 4];

//Create function with two parameters, w/ second
const removeFromArray = function (array, ...args) {
  // 1. Iterate through args
  for (const arg of args) {
    // 2. Make sure arg exists
    if (array.includes(arg)) {
      array.splice(array.indexOf(arg), 1);
    } else {
      continue;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
