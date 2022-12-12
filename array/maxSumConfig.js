/** Returns the maximum sum possible with clock or counterClock rotation for any no of times 
 * @param { number[] } arr The input array
 * @return { number } max The final maximum sum
 */
const maxSum = (arr) => {
  const tSum = arr.reduce((acc, ele) => acc + ele , 0);
  let prevSum = arr.reduce((acc, ele, ind) => acc + ele * ind , 0);
  let max = prevSum;

  for(let item of arr) {
    prevSum = (prevSum - (tSum - item)) + (item * (arr.length -  1));
    max = Math.max(max, prevSum);
  }

  return max;
}

console.log(maxSum([8,3,1,2]));
