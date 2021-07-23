// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  // TODO: Program me
  var loopCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      var zero = arr.splice(i, 1);
      arr.push(0);
      i--;

      loopCounter++;
    }
    if (loopCounter === arr.length) break;
  }

  return arr;
};

//moveZeros([1,2,0,1,0,1,0,3,0,1]);
