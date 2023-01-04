/** Returns the start and end index of the subarray whose sum is S from L TO R
 *  @param {number[]} arr - The input Array
 *  @param {number} S - The given sum
 *  @return {number} [i,j] - The start and end index
 */
const subArrSumK = (arr, S) => {
  let i = 0, j = 0;
  let sum = 0;
  while(j < arr.length) {
    sum += arr[j];
    while(sum > S) sum -= arr[i++];
    if(sum == S && i <= j) return [i + 1, j + 1];
    j++;
  }
  return [-1];
}
console.log(subArrSumK([1,2,3,7,5], 12));
