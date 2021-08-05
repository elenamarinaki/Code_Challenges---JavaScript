function replaceEveryWord(str) {
    const  words = str.split(' ');
    const finalArr = [];
    let longestWord = '';
    

    // for (let i = 1; i < words.length; i++) {
    //     if (words[i].length > words[i - 1].length) {
    //         longestWord = words[i];
    //     }
        
    // }

    longestWord = words.reduce((longest, current) => {
        if (longest.length < current.length) {
            longest = current;
        }
        return longest;
    });

    for (word of words) {
        word = longestWord.substring(0, word.length);
        finalArr.push(word);
    }

    // for (let i = 0; i < words.length; i++) {
    //     console.log(word);
    //     words[i] = longestWord.substring(0, words[i].length);
    
    //     finalArr.push(words[i]);
    // }
    return finalArr.join(' '); 

}

// replaceEveryWord("what a rainy day it was today");
replaceEveryWord("the brown fox ran away quickly");
