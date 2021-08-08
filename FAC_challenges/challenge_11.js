function findEven(str) {
  const base10Arr = [];
  const base2Arr = str.split(',');
  let decimal = 0;

  if (str != '') {
    for (let j = 0; j < base2Arr.length; j++) {
      let x = base2Arr[j];
      decimal = 0;

      for (let i = x.length - 1; i >= 0; i--) {
        decimal += x[i] * (2 ** (x.length - 1 - i));
      }
      base10Arr.push(decimal);

    }
    const result = base10Arr.filter(x => x % 2 === 0);
    
    return result;

  } else {
    return [];
  }
}


// findEven('01, 111, 10');
findEven("10,1011,1000001,111010,101000000");
// returns [2,58,320]

// findEven("1011");
// returns [];

// findEven("");
// returns []