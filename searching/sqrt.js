/* Returns the square root of a non-negative integer
 * @param {number[]} x non-negative integer
 * @return {number} ans Result
*/
const sqrt = (x) => {
  let left = 1, right = x, ans = 1;
  while(left <= right) {
    let mid = left + parseInt((right - left) / 2);
    if(mid <= parseInt(x / mid)) {
      ans = mid;
      left = mid + 1;
    }
    else 
      right = mid - 1;
  }
  return ans;
}

console.log(sqrt(27));
