/** 
 * @param { number[] } arr The input array to be rotated
 * @param { number } d The no of steps to be rotated
 * @return { number[] } The resultant rotated array 
 */
const rotateArray = (arr, d) => {
  const n = arr.length;
  const firstHalf = arr.slice(0, d).reverse();
  const secondHalf = arr.slice(d, n).reverse();
  return [...firstHalf, ...secondHalf].reverse();
}
console.log(rotateArray([1,2,3,4,5], 2));
