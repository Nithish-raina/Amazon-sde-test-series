/** 
 * @param { array, number, number } arr, x
 * @return { number }
*/ 
const minDist = (arr, x, y) => {
  let res = 1e5;
  let tempX = -1, tempY = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === x) tempX = i;
    if(arr[i] === y) tempY = i;
    if(tempX != -1 && tempY != -1) res = Math.min(res, Math.abs(tempX - tempY));
  }
  return tempX === -1 || tempY === -1 ? -1 : res;
}
console.log(minDist([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6));
