/** Returns a sorted subsequence of size 3 
 *  @param { number[] } arr The input array 
 *  @return { number[] } res The resultant subsequence array of size 3
 */
const sortSeqThree = (arr) => {
  const n = arr.length;
  let smaller = new Array(n);
  smaller[0] = -1;
  let greater = new Array(n);
  greater[n-1] = -1;
  let res = [];
  let minIndex = 0, maxIndex = n - 1;
  for(let i = 1; i < n; i++) {
    if(arr[i] <= arr[minIndex]) {
      minIndex = i;
      smaller[i] = -1;
    }
    else 
      smaller[i] = minIndex;
  }
  for(let i = n - 2; i >= 0; i--) {
    if(arr[i] >= arr[maxIndex]) {
      maxIndex = i;
      greater[i] = -1;
    }
    else
      greater[i] = maxIndex;
  }
  for(let i = 0; i < n; i++) {
    if(smaller[i] != -1 && greater[i] != -1) {
      res.push(arr[smaller[i]]);
      res.push(arr[i]);
      res.push(arr[greater[i]]);
    }
  }
  return res;
}
let ans = sortSeqThree([1,2,3,1,1,3]);
if(ans.length > 0 && ans.length <= 3) 
  console.log("1");
else
  console.log("0");
