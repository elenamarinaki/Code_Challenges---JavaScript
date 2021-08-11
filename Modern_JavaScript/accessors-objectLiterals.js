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

const user = {
  realName: 'Amir',
  get userName() {
    return this.realName;
  },
  set userName(newName) {
    this.realName = newName;
  },
};
user.userName = 'Betty';
[user.realName, user.userName];

// Result: ['Betty', 'Betty'];

// ----------------------------------------------------
// ----------------------------------------------------

// Add a userName setter to this object. It should use push to append the userName to the names list.

const user = {
  names: ['Amir'],
  set userName(newName) {
    this.names.push(newName);
  },
};

// ----------------------- TESTING
user.userName = 'Betty';
user.names;

// Goal: ['Amir', 'Betty'];
