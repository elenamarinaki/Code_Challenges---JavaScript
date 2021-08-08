function squareDigits(n) {
  let nStr = n.toString().split('');
  let square = 0;
  let nSquared = [];
  
  nStr.forEach(x => {
    square = x ** 2;
    nSquared.push(square);
  })
  
  let number = parseInt(nSquared.join(''));
  // console.log(typeof(number));
  return number;
}

squareDigits(45);



squareDigits(10)// returns 10

// squareDigits(22) // returns 44

// squareDigits(95) // returns 8125