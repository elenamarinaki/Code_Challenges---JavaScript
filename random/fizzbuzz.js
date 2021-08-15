function fizzbuzz(min, max) {
  for (let i = min; i < max; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log('fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else {
      console.log(i);
    }
  }
}

function fizzbuzz2(min, max) {
  for (let i = min; i <= max; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    if (output === '') output = i;
    console.log(output);
  }
}
