/* Returns the maximum sum of a triplet closest to a target 
 * @param {number[]} arr The input Array
 * @param {number} target The target value
 * @return {number} res The final maximum sum of the desired triplet
 */
const threeSumClosest = (arr, target) => {
  arr.sort();
  let res = -1;
  let closeSoFar = 1e8;
  for(let i = 0; i < arr.length - 2; i++) {
    let l = i + 1, r = arr.length - 1;
    while(l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if(sum == target) {
        return sum;
      }
      else if(sum < target ) {
        if( Math.abs(target - sum) < closeSoFar) {
          res = sum;
          closeSoFar = Math.abs(target - sum);
        }
        l++;
      }
      else {
        if( Math.abs(target - sum) <= closeSoFar) {
          res = sum;
          closeSoFar = Math.abs(target - sum);
        }
        r--;
      }
    }
  }
  return res;
}

console.log(threeSumClosest([5, 2, 7, 5], 13));
