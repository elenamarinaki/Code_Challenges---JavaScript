// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //Code here
  var words = str.split(' ');
  var latinStr = '';

  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split('');

    if (
      letters[letters.length - 1] === '!' ||
      letters[letters.length - 1] === '?'
    ) {
      letters.splice(letters.length - 1, 0, letters[0]);
      letters.shift();
      letters.splice(letters.length - 1, 0, 'ay ');
      break;
    } else {
      letters.push(letters[0]);
      letters.shift();
      letters.push('ay');
    }

    words[i] = letters.join('');
  }
  latinStr = words.join(' ');

  return latinStr;
}

pigIt('Hello World!');
