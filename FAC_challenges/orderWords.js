function order(words){
  //splitting the sentence into its words, based on the spaces between each two words
  const word = words.split(' ');
  let wordLength = word.length;

  let current = 0;
  let biggest = 0;
  let keyIdx = 0;
  let arr = [];

  const regex = /\d/g;

  //we are scanning the word array for each word; that would be (word.length) number of elements
  // I am assigning the (word.length) to a variable, since I am going to split the array later in order to sort it 
  for (let i = 0; i < wordLength; i++) {

    keyIdx = 0;
    biggest = 0;

    // for every word, I am finding the number in it
    // this *forEach* will repeat for (word.length) times, storing the higher index every time
    word.forEach((elem, idx) => {
      current = elem.match(regex);

      if (current > biggest) {
        biggest = current;
        keyIdx = idx;
      }
    });

    // here, we place the higher index at the beginning of a new array, and we DELETE it for the *word* array
    // that means, in each itteration the *arr* array grows by one element of the next lower number, while the *word* array
    // becomes smaller, as we extract this element to sort it into *arr*
    arr.unshift(word[keyIdx]);
    word.splice(keyIdx, 1);
  }

  return arr.join(' ');
  
}


order("is2 Thi1s T4est 3a");