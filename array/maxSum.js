/** Utility function for recursion to find maxSum 
  * @param {number[]} arr - The input array
  * @param {number} ind - Index we are traversing
  * @param {number[]} dp - Dp array to store values for memoization
  * @return {number} max of two choices
*/
const findMax = (arr, ind, dp) => {
  if(ind < 0) return 0;
  if(ind === 0) return arr[0];
  if(dp[ind] !== -1) return dp[ind];
  let pick = arr[ind] + findMax(arr, ind - 2, dp);
  let notPick = 0 + findMax(arr, ind - 1, dp);
  return Math.max(pick, notPick);
}
/** Returns maximum sum 
  * @param {number[]} arr - The input array
  * @param {number} n - Length of the input Array
  * @return {number} Final Maximum Sum
*/
const findMaxSum = (arr, n) => {
  let dp = Array(n).fill(-1);
  return findMax(arr, n - 1, dp);
}

console.log(findMaxSum([5,5,10,100,10,5], 6));
