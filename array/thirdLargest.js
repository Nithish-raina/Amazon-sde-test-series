/**
* @param {array} arr
* @return {number} 
*/
// Custom comparator function
const compare = ((a,b) => {
  return b - a;
});
const thirdLargest = (arr) => {
  arr.sort(compare);
  return arr[2];
}
let arr = [1,2,3,4,5,6,7];
console.log(thirdLargest(arr));
