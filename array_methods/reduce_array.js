function reduceArray(arr, f) {
  f();
  let finalVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    finalVal = f(finalVal, arr[i]);
  }

  console.log(finalVal);
  // return finalVal;
}

// function test(arr) {
//   const arr2 = arr.reduce((sum, add) => sum += add);
//   return arr2;
// }

reduceArray([1, 2, 3, 4, 5], (a, b) => a + b);
reduceArray(['horse', 'cat', 'unicorn'], (a, b) => {
  // (a.length > b.length) ? a : b;
  if (a > b) {
    return a;
  } else {
    return b;
  }
});
// test([1, 2, 3, 4]);
