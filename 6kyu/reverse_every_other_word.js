// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


function reverse(str) {
    //WRITE SOME MAGIC
    let words = str.trim().split(" ");
    for (var i = 1; i < words.length; i += 2) {

        let reversed = words[i].split('').reverse();
        words[i] = reversed.join("");

    }

    return words.join(" ");
}

reverse("Reverse this string, please!");
// "Reverse siht string, !esaelp"