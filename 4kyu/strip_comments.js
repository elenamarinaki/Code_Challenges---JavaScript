// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    const strArray = input.split('');
    // console.log(strArray);
    let markerPos = 0;
    let markerFlag = false;
    let returnKeyPos = 0;
    let returnKeyFlag = false;
    let lastChar = false;
  
    for (marker of markers) {
      if (marker !== '') {
        lastChar = false;
        for (let i = 0; i <= strArray.length; i++) {
          if (strArray[i] === marker) {
            markerPos = i;
            markerFlag = true;
            // console.log(i);
          } else if (strArray[i] === '\n') {
            returnKeyPos = i;
            returnKeyFlag = true;
          } else if (i === strArray.length) {
            lastChar = true;
            // console.log('I*M HEREEEEEEEEEE!!!!!!!!!!!');
          }
  
          if ((markerFlag && returnKeyFlag) && (markerPos < returnKeyPos)) {
            // console.log('I*M HEREEEEEEEEEE!!!!!!!!!!!');
            strArray.splice((markerPos - 1), (returnKeyPos - markerPos + 1));
            markerFlag = false;
            returnKeyFlag = false;
            
          } else if (markerFlag && lastChar) {
            // console.log('I*M HEREEEEEEEEEE!!!!!!!!!!!');
            strArray.splice(markerPos, (strArray.length - markerPos));
            markerFlag = false;
            lastChar = false;
            
          }
        }
      }
      console.log(marker);
    }
    return strArray.join('').trim();
  };

  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"