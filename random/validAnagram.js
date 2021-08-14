function validAnagram(str1, str2) {
  const objCounter = {};

  if (str1.length !== str2.length) return false;

  for (let letter1 of str1) {
    if (!(letter1 in objCounter)) {
      objCounter[letter1] = 1;
    } else {
      objCounter[letter1]++;
    }
  }
  for (let letter2 of str2) {
    if (!(letter2 in objCounter)) {
      return false;
    } else {
      objCounter[letter2]--;
    }
  }

  return true;
}

validAnagram('cat', 'tac');
validAnagram('cinema', 'iceman');
validAnagram('text', 'taxt');
validAnagram('anagram', 'anegrim');
