// Write an infinite powersOfTwo generator function that yields 1, 2, 4, 8, 16, etc., multiplying by 2 each time.

function* powersOfTwo() {
  let i = 1;
  while (true) {
    yield i;
    i *= 2;
  }
}

// ----------------------- TESTING

const [x0, x1] = powersOfTwo();

// Get the 32nd power of 2.
const iterable = powersOfTwo()[Symbol.iterator]();
let x32;
for (let i = 0; i < 32; i++) {
  x32 = iterable.next().value;
}

[x0, x1, x32];

// Goal: [1, 2, 2147483648];
