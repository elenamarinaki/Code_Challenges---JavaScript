function sortByName(arr) {

  let n = [];
  let w = [];
  let numWords = [];
  let result = [];
  let resultNumbers = [];

  const numNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

  // TURNING NUMBERS INTO NUMBER_WORDS :)
  for (let i = 0; i < arr.length; i++) {
    n = arr[i].toString().split('');

    if (n.length === 1) {  //0-9
      numWords.push(numNames[n]);
    } else if (n.length === 2) {     //10-99
      if (n[0] === '1') {              // 10 - 19 special cases
        numWords.push(numNames[10 + parseInt(n[1])]);
      } else {
        if (n[1] !== '0') {
          numWords.push(tens[n[0]] + ' ' + numNames[n[1]]);
        } else {
          numWords.push(tens[n[0]]);
        }
      }
    } else {    // 100-999
      if (n[2] !== '0') {
        if (n[1] !== '0') {
          if (n[1] === '1') {
            numWords.push(numNames[n[0]] + ' hundred ' + numNames[10 + parseInt(n[2])]);
          } else {
            numWords.push(numNames[n[0]] + ' hundred ' + tens[n[1]] + ' ' + numNames[n[2]]);
          }
        } else {
          numWords.push(numNames[n[0]] + ' hundred ' + numNames[n[2]]);
        }
      } else {
        if (n[1] !== '0') {
          numWords.push(numNames[n[0]] + ' hundred ' + tens[n[1]]);
        } else {
          numWords.push(numNames[n[0]] + ' hundred');
        }
      }

    }
  }

  console.log(numWords);


  // SORTING THE NUMBER_WORDS...
  numWords.sort();
  // numWords.sort((a, b) => a.localeCompare(b));

  // TURNING THE NUMBER_WORDS BACK INTO NUMBERS!
  for (let j = 0; j < numWords.length; j++) {
    w = numWords[j].split(' ');
    // console.log(w);

    if (w.length === 1) {
      if (tens.indexOf(w[0]) > -1) {
        result.push(tens.indexOf(w[0]).toString() + '0');
      } else {
        result.push(numNames.indexOf(w[0]).toString());
      }
    } else if (w.length === 2) {
      if (w[1] === 'hundred') {
        result.push(numNames.indexOf(w[0]).toString() + '00');
      } else {
        result.push(tens.indexOf(w[0]).toString() + numNames.indexOf(w[1]).toString());
      }
    } else if (w.length === 3) {
      if (tens.indexOf(w[2]) > -1) {
        result.push(numNames.indexOf(w[0]).toString() + tens.indexOf(w[2]).toString() + '0');
      } else if (numNames.indexOf(w[2]) < 10) {
        result.push(numNames.indexOf(w[0]).toString() + '0' + numNames.indexOf(w[2]).toString());
      } else {
        result.push(numNames.indexOf(w[0]).toString() + numNames.indexOf(w[2]).toString());
      }
    } else {
      result.push(numNames.indexOf(w[0]).toString() + tens.indexOf(w[2]).toString() + numNames.indexOf(w[3]).toString());
    }

  }

  console.log(result);

  result.forEach(element => {
    resultNumbers.push(parseInt(element));
  });


  console.log(resultNumbers);



  return resultNumbers;
}


// sortByName([8, 8, 9, 9, 10, 10]);
//   [8, 8, 9, 9, 10, 10]
// sortByName([1, 2, 3, 4]);
//   [4, 1, 3, 2]
// sortByName([9, 99, 999]);
// [9, 999, 99]
sortByName([20, 140, 478, 47, 616, 701]);