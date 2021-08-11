// Write a function sum that sums numbers. It should take the numbers as rest parameters. If no arguments are given, it should return 0.

function sum(...numbers) {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum;
}

// ------------------------- TESTING
const sums = [sum(), sum(100), sum(2000, 1), sum(-500, -300)];
sums;

// Goal: [0, 100, 2001, -800];
