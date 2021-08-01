function forEachArray(arr, f) {
  f();
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(f(arr[i]));
  }

  return arr2;
}

forEachArray([1, 2, 3], (x) => x * 2);

function test(arr) {
  const arr2 = [];

  arr.forEach((x) => {
    arr2.push(x * 2);
  });

  console.log(arr2);
}

// test([1, 2, 3, 4, 5]);
