function countUniqueValues(arr) {
  let i = 0;
  let counted = 1;
  if (arr.length === 0) return 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      counted++;
    }
    i++;
  }
  return counted;
}

countUniqueValues([1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8]);
countUniqueValues([1, 2, 3, 7, 8, 34, 34, 34, 65, 76, 90, 90]);
countUniqueValues([1, 45, 56, 56, 67, 89]);
