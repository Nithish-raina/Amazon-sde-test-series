/*  Rearranges the array in O(1) Space such that arr[i] -> arr[arr[i]]
 *  @param {number[]} arr The input array
 *  @return {number[]} res The resultant rearranged array
*/

const rearrange = (arr) => {
  const n = arr.length;
  let res = arr.map(ele => ele += (arr[ele] % n) * n);
  return res.map(ele => parseInt(ele /= n));
}

console.log(rearrange([4, 0, 2, 1, 3]));
