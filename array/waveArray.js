/** Swaps two elements in the array inplace
 *  @param {number} n1 - The first element
 *  @param {number} pos1 - Index of first element
 *  @param {number} n2 - The second element
 *  @param {number} pos2 - Index of second element
 *  @param {number[]} arr - The array to which swapping has to be done
 */

const swap = ((n1, pos1, n2, pos2, arr) => {
  n1 = n1 ^ n2;
  n2 = n2 ^ n1;
  n1 = n1 ^ n2;
  arr[pos1] = n1;
  arr[pos2] = n2;
});

/** Returns the wavedArray of the original sorted input array 
 *  @param {number[]} arr - The sorted input array
 *  @return {number[]} arr - The waved array transformation of the original array
 */
const waveArray = ((arr) => {
  for(let i = 0; i < arr.length - 1; i += 2) {
    swap(arr[i], i, arr[i + 1], i + 1, arr);
  }
  return arr;
});

console.log(waveArray([1,2,3,4,5]));
