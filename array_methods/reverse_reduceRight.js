function reverse(arr) {
  return arr.reduceRight((l, r) => l.concat(r), []);
}

reverse(['a', 'b', 'c']);
reverse([1, 2, 3, 4, 5]);
