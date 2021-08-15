function spreadNumber(num) {
  const arr = [];

  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  
  return arr;
}

function myNumber() {
  this.isNumber = 'yes';
}

let nNum = 0;

var oNum = Object.appendChain(nNum, new myNumber());
