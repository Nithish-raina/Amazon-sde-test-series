/* Returns the array inplace with 0's on left and 1's on right
 * @param {number[]} arr The input array
 * @return {number[]} arr Inplace modified array 
 */ 
const binSorting = (arr) => {
  // fop - Pointer to first one in the final array
  let fop = arr.length;
  // tp - Traversal pointer from right to left
  let tp = arr.length - 1;
  while(tp >= 0) {
    if(arr[tp] == 1) {
      fop--;
      let temp = arr[tp];
      arr[tp] = arr[fop];
      arr[fop] = temp;
    }
    tp--;
  }
  return arr;
}

console.log(binSorting([1, 0, 1, 1, 0]));
