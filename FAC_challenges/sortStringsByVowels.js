function sortStringsByVowels(strings) {
  let counter = 0;
  let maxCounter = 0;
  let intMax = 0;
  let idxMax = 0;
  let maxVowels = [];
  const result = [];

  let strInitLength = strings.length;

  const vowels = 'aeiouAEIOU'.split('');
  // console.log(vowels);

  // we make an array with the longest sequence of vowels in every string
  for (string of strings) {
    maxCounter = 0;
    counter = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        // console.log(string[i]);
        counter++;
        if (counter > maxCounter) {
          maxCounter = counter;
        }
      } else {
        counter = 0;
      }


    }
    // console.log(maxCounter);
    maxVowels.push(maxCounter);
  }
  console.log(maxVowels);


  for (let j = 0; j < strInitLength; j++) {

    intMax = 0;
    idxMax = 0;

    for (let k = 0; k < maxVowels.length; k++) {
      if (maxVowels[k] > intMax) {
        intMax = maxVowels[k];
        idxMax = k;
      }
    }
    result.push(strings[idxMax]);
    maxVowels.splice(idxMax, 1);
    strings.splice(idxMax, 1);


  }

  return result;
};


// sortStringsByVowels(['abaa']);

// sortStringsByVowels(['aba', 'eii']);

// sortStringsByVowels(["a", "e", "ii", "ooo", "u"]);
// ["ooo","ii","a","e","u"]

sortStringsByVowels(["AIBRH", "", "YOUNG", "GREEEN"]);
// ["GREEEN","AIBRH","YOUNG",""]