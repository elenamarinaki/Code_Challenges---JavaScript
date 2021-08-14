// Reverse every third word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverseWords(string){
    const words = string.split(" ");
  
    for (let i = 2; i < words.length; i+3){
      if (i < words.length){
        let word = words[i].split("").reverse();
        words[i] = word.join("");
      } else {
        break;
      }
  
    }
    return words.join("")
  }
  
  // =====
  // Uncomment these tests to check your solution
  // =====
  
  test(reverseWords("the quick brown fox"), "the quick nworb fox");
  // test(reverseWords("Hello World Today"), "Hello World yadoT")
  // test(reverseWords("Where am I?"), "Where am ?I")
  // test(reverseWords("down the road and around the corner"), "down the daor and around eht corner")