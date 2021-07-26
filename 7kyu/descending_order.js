// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  let str = n.toString();

  if (str.length === 1) {
    return n;
  } else {
    let array = str.split('');
    let counter = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] === array[i - 1]) {
        counter++;
      }
    }
    if (counter === array.length) {
      return n;
    } else {
      let sortedArray = array.sort((a, b) => b - a);
      const result = sortedArray.join('').toString();
      return parseInt(result);
    }
  }

  // console.log(array);
}
