function formatNumber(n) {
  let numberChar = '';
  let numberStr = n.toString();
  const numberArray = [];
  let counter = 0;


  let decimalIdx = numberStr.indexOf('.');
  // console.log(decimalIdx);

  for (let i = numberStr.length - 1; i >= 0; i--) {
    numberChar = numberStr.charAt(i);

    //number has NO decimal
    if (decimalIdx == -1) {
      if (i === numberStr.length - 1) {
        numberArray.unshift(numberChar, '.', '0');
        counter = 1;
      } else if (counter != 3) {
        numberArray.unshift(numberChar);
        counter++;
      } else {
        numberArray.unshift(numberChar, ',');
        counter = 1;
      }
    }
    //number has decimal
    else {
      if (i >= decimalIdx) {
        numberArray.unshift(numberChar);
      } else if (counter != 3) {
        numberArray.unshift(numberChar);
        counter++;
      } else {
        numberArray.unshift(numberChar, ',');
        counter = 1;
      }
    }
  }
  return numberArray.join('');
}

formatNumber(23082342.3285); //Expected 23,082,342.3285

// formatNumber(23082342);

// formatNumber(1); //Expected "1.0"

// formatNumber(1000.23); //Expected "1,000.23"
