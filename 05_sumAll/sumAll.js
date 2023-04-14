// Implement a function that takes 2 integers and returns the sum of every number between
// 1. Create a counter variable
// 2.

const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    for (
      let i = Number(`${num1 < num2 ? num1 : num2}`);
      i <= Number(`${num1 < num2 ? num2 : num1}`);
      i++
    ) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
