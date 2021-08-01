function filter(arr, callback) {
  return arr.reduce((x, y) => {
    if (callback(y)) {
      x.push(y);
    }
    return x;
  }, []);
}

filter([null, undefined], (num) => true);
filter([1, 2, 3], (num) => num > 5);
filter([1, 2, 3], (num) => num > 1);
filter([1, 2, 3], (num) => num >= 0);
