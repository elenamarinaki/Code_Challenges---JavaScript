// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  //your code here
  var newMsg = '';
  //var words = message.split(' ');

  for (var i = 0; i < message.length; i++) {
    if (
      (96 < message.charCodeAt(i) && message.charCodeAt(i) < 110) ||
      (64 < message.charCodeAt(i) && message.charCodeAt(i) < 78)
    ) {
      newMsg += String.fromCharCode(message.charCodeAt(i) + 13);
    } else if (
      (109 < message.charCodeAt(i) && message.charCodeAt(i) < 123) ||
      (77 < message.charCodeAt(i) && message.charCodeAt(i) < 91)
    ) {
      newMsg += String.fromCharCode(message.charCodeAt(i) - 13);
    } else {
      newMsg += message.charAt(i);
    }
  }

  return newMsg;
}
