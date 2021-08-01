function mapArray(arr, f) {
  f();
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(f(arr[i]));
  }

  console.log('--------- ✨ my mapArray');
  return arr2;
}

function test(arr) {
  const arr2 = arr.map((x) => x * 2);
  console.log('--------- ✨ original .map');
  return arr2;
}

mapArray([5, 4, 3, 2, 1], (x) => x * 2);
// test(['a', 'b', 'c', 'd', 'e']);
test([1, 2, 3, 4, 5]);
