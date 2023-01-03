/** Returns maximum Index (j - i) with the constraint arr[i] <= arr[j]
 *  @param {number[]} arr - The input array
 *  @param {number} N - The size of the array
 *  @return {number} ans - The maximum index (j - i)
 */
const maxIndex = (arr, N) => {
  const lMin = [], rMax = [];
  lMin[0] = arr[0];
  for(let i = 1; i < arr.length; i++) 
    lMin[i] = Math.min(arr[i], lMin[i - 1]);
  rMax[N - 1] = arr[N - 1];
  for(let i = N - 2; i >= 0; i--) 
    rMax[i] = Math.max(arr[i], rMax[i + 1]);
  let i = 0, j = 0, ans = 0;
  while(i < N  && j < N) {
    if(lMin[i] <= rMax[j]) {
      ans = Math.max(ans, j - i);
      j++;
    }
    else i++;
  }
  return ans;
}
console.log(maxIndex([34, 8, 10, 3, 2, 80, 30, 33, 1], 9));
