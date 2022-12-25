/** Returns the first equilibiriumPoint in an array  
 *  @param {number[]} arr - The input array
 *  @return {number} res - The resultant index of the array where equilibiriumPoint is found
 */
const equilibiriumPoint =  (arr) => {
  let res = -1;
  
  if(arr.length === 1 ) return 1;
  
  let totSum = arr.reduce((a,b) => a + b, 0);
  let leftSum = arr[0];
  
  for(let i = 1; i < arr.length; i++) {
      let rightSum = totSum - leftSum - arr[i];
      
	  if(leftSum === rightSum ) {
        res = i + 1;
        break;
      }
      leftSum += arr[i];
  }
  
  return res;
}

console.log(equilibiriumPoint([1,3,5,2,2]));
console.log(equilibiriumPoint([1]));
