function shoppingList(str) {
  const list = str.split(', ');
  const objList = {};

  if (str === '') {
    return {};
  } else {
    for (ingredients of list) {
      let elements = ingredients.split(' ');

      if (elements[0] !== '0') {
        objList[elements[1]] = parseInt(elements[0]);
      }

    }

    return objList;
  }

}




shoppingList("2 tomatoes, 1 egg, 3 pumpkins");
// returns { tomatoes: 2, egg: 1, pumpkins: 3 }

// shoppingList("");
// // returns {}

// shoppingList("2 tomatoes, 1 egg, 0 pumpkins");
// // returns { tomatoes: 2, egg: 1 }