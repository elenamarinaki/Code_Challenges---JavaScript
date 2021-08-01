function filterArray(arr, f) {
  f();
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i]) === true) {
      arr2.push(arr[i]);
    }
  }

  return arr2;
}

// function test(arr) {
//   const arr2 = arr.filter(x => x % 2 === 0);
//   console.log(arr2);
// }

// test([1, 2, 4, 5, 7, 8, 12, 23, 24]);

filterArray([2, 4, 5, 7, 6, 8, 9, 22, 25, 27, 32, 35, 36], (x) => x % 2 === 0);

// filterArray(['dog', 'horse', 'cat', 'unicorn', 'cow'], x => x.length === 3);

// function string3(str) {
//   if (str.length === 3) {
//     return true;
//   }
// };

// x = 'this is a string';
// console.log(x.length)

// string3('dog');
