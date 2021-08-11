// Write a function that writes out a sum the long way. Use template literals to build a string including the two numbers and the final sum.

function longSum(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

// --------------------------- TESTING
[longSum(1, 2), longSum(10, 20)];

// Goal: ['1 + 2 = 3', '10 + 20 = 30'];

// --------------------------- EXAMPLES
const name = 'Amir';
const email = ['Hi, ' + name, '', "We've updated our privacy policy!"].join(
  '\n'
);
email === "Hi, Amir\n\nWe've updated our privacy policy!";

// Result: true;

const name = 'Amir';
const email = `
  Hi, ${name},
  
  We've updated our privacy policy!
`;
email === "\n  Hi, Amir,\n  \n  We've updated our privacy policy!\n";

// Result: true;
