function mostCommon(arr) {
  let counter = 0;
  let intCounter = 0;
  let commonest = 0;

  if (arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        intCounter++;
      }
    }
    if (intCounter > counter) {
      counter = intCounter;
      commonest = arr[i];
    } else if (intCounter == counter) {
      if (arr[i] < commonest) {
        commonest = arr[i];
      }
    }
    intCounter = 0;
  }

  return commonest;
}

mostCommon([1, 7, 2, 3, 4, 8, 2, 4, 7, 2]);

// mostCommon([1, 2, 3, 4, 4, 4, 1]); // expected: 4

// mostCommon([-1, -1, 0, 3, 8, 0]); // expected: -1

// mostCommon([1, 1, 2, 3, 8, 2]); // expected: -1

// mostCommon([]); // expected undefined