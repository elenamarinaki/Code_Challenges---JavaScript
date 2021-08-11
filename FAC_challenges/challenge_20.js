function interleave(arr1, arr2) {
  let arrLength = arr1.length;
  let arrFinal = [];
  
  for (let i = 0; i < arrLength; i++) {
    arrFinal.push(arr1[i]);
    arrFinal.push(arr2[i]);
  }
  
  return arrFinal;
  
}

// interleave(['a', 'b', 'c'], [1, 2, 3]);

// interleave([1, 2, 3], ['a', 'b', 'c'])
// returns [1, 'a', 2, 'b', 3, 'c']

interleave([[1, 2], 'a', -1], ['one', -1, null])
// returns [[1, 2], 'one', 'a', -1, -1, null]