// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let words = s.split(' ');

  let shortest = words.reduce((shortest, word) => {
    return word.length < shortest.length ? word : shortest;
  });

  return shortest.length;
}

findShort('bitcoin take over the world maybe who knows perhaps');
// 3

findShort("Let's travel abroad shall we");
// 2
