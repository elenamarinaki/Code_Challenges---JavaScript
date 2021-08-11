// Add a userName getter to this object. It should return whatever is in the userName variable.

let userName = 'Amir';

const user = {
  get userName() {
    return userName;
  },
};

// ----------------------- TESTING
const name1 = user.userName;
userName = 'Betty';
const name2 = user.userName;
[name1, name2];

// Goal: ['Amir', 'Betty'];

// ----------------------- EXAMPLES
const user = {
  realName: 'Amir',
  set userName(newName) {
    this.realName = newName;
  },
};
user.userName = 'Betty';
user.realName;

// Result: 'Betty';

const user = {
  realName: 'Amir',
  set userName(newName) {
    this.realName = newName;
  },
};
user.userName;

// Result: undefined;
