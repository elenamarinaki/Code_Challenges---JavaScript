function fibonacci(num) {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  console.log(result);
}
// [0, 1, 1, 2, 3, 5...]

fibonacci(5);
fibonacci(9);
fibonacci(27);
