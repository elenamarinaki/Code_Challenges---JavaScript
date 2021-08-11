// Write a function that writes out a sum the long way. Use template literals to build a string including the two numbers and the final sum.

function longSum(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

// --------------------------- TESTING
[longSum(1, 2), longSum(10, 20)];

// Goal: ['1 + 2 = 3', '10 + 20 = 30'];
