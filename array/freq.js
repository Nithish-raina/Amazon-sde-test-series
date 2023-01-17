/*  Returns the inplace modified array 
 *  @param {number[]} arr The input array
 *  @param {number} P  Value of param
 *  @return {arr} arr The final modified array
*/
const freq = (arr, P) => {
  const N = arr.length;
  for(let i = 0; i < N; i++) {
    arr[i]--;
  }
  for(let i = 0; i < N; i++) {
    if(arr[i] % P < N)
      arr[arr[i] % P] += P;
    }
  for(let i = 0; i < N; i++) {
    arr[i] = parseInt(arr[i] / P);
  }
  return arr;
}

console.log(freq([2, 3, 2, 3, 5], 5));
