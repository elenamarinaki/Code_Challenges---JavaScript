function printInBox(arr) {
  let longestLength = 0;
  let wordDiff = 0;
  
  const longestWord = arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest; 
  });

  longestLength = longestWord.length;

  console.log('-'.repeat(longestLength + 6));

  arr.forEach(word => {
    wordDiff = longestLength - word.length;
    console.log(`|  ${word}${' '.repeat(wordDiff)}  |`);
  });
  // console.log(longestWord);
  console.log('-'.repeat(longestLength + 6));
}

// printInBox(['hello', 'there', 'my', 'friend']);

printInBox(['hello', 'there', 'my', 'friend', 'what', 'are', 'you', 'doing', 'todayyyyyyyyyy??!']);