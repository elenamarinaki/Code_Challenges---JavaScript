// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.


function solution(list) {
  const rangeList = [];
  let rangeString = '';
  const result = [];

  for (let i = 0; i < list.length; i++) {
    if ((list[i] + 1) != list[i + 1]) {
      if (rangeList.length > 0) {
        rangeList.push(list[i]);

        if (rangeList.length == 2) {
          result.push(rangeList[0], rangeList[1]);
        } else {
          rangeString = rangeList[0].toString() + '-' + rangeList[rangeList.length - 1].toString();
          result.push(rangeString);
        }
        rangeString = '';
        rangeList.length = 0;
      } else {
        result.push(list[i]);
      }

    } else {
      rangeList.push(list[i].toString());
    }
  }

  return result.join(',');
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"