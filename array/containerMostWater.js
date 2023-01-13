/*  Returns the maximum Area 
    @param {number[]} arr The input array
    @return {number} maxarea The resultant maximum area computed
*/
const maxArea = (arr) => {
  let maxarea = 0;
  let area, l = 0, r = arr.length - 1;
  while(l < r) {
    area = (r - l) * Math.min(arr[l], arr[r]);
    maxarea = Math.max(area, maxarea);
    if(arr[l] <= arr[r])
      l++;
    else 
      r--;
  }
  return maxarea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
