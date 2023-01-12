/*  Returns the maximum sum of a subarray containing integers from (-infinity, infinity)
 *  @param {number[]} arr Input array
 *  @return {number} maxSum Maximum sum of a subarray
*/
((arr) => {
  let curSum = arr[0], maxSum = arr[0];
  for(let i = 1; i < arr.length; i++) {
    curSum = (curSum < 0) ? arr[i] : curSum + arr[i];
    maxSum = Math.max(maxSum, curSum);
  }
  console.log(maxSum);
  return maxSum;
})([-1, -2, 3, -2, 5]);

