function stringToObject(str) {
  const strObjects = str.split(',');
  let objPair = [];
  const finalObj = {};

  if (str != '') {
    strObjects.forEach(pair => {
      objPair = pair.split(':');
      //  console.log(objPair[0]);
      finalObj[objPair[0]] = objPair[1];
    });
  } else {
    return {};
  }
  return finalObj;
}


// stringToObject("") // Expected {}

// stringToObject("a:1,b:2,c:3") //Expected { a: "1", b: "2", c: "3" }

stringToObject("one:-1,two:hi there,three:what's that?") // Expected { one: "-1", two: "hi there", three: "what's that?" }