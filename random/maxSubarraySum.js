// sliding window pattern

function maxSubarraySam(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

maxSubarraySam([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
maxSubarraySam([1, 2, 3, 4, 5], 2);
