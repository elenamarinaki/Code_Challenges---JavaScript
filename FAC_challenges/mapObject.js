function mapObject(obj, fn) {

  const objArr = Object.entries(obj);

  for (let entry of objArr) {
    entry[1] = fn(entry[1]);
  }

  const objFinal = Object.fromEntries(objArr);

  return objFinal;

}



// mapObject({ a: 1, b: 2 }, (n) => n + 2);
// returns { a: 3, b: 4 }

mapObject(({ greeting: 'hi there, ', goodbye: 'see you later, ' }), (s) => s + 'Yvonne');
// returns { greeting: 'hi there, Yvonne', goodbye: 'see you later, Yvonne' }