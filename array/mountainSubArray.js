/** Returns whether the given range forms a mountain or not 
 *  @param { number[] } arr - The input array
 *  @param { number } l - start index of the range
 *  @param { number } r - end index of the range
 *  @return { boolean } T/F 
 */

const isMountain = (arr, l, r) => {
  
  while(l < r) {
    if(arr[l] > arr[l + 1]) break;
    l++;
  }
  
  while(l < r) {
    if(arr[l] < arr[l + 1]) break;
    l++;
  }
  
  if(l === r) return true;
  return false;
}

/** Fetches each range from queries and checks whether its mountainSubArray or not
 *  @param {number[]} arr - The input array
 *  @param {number[][]} queries - Queries array containing each range as a pair
 *  @return {number[]} res - Resultant array of boolean values
 */

const mountainSubArray = (arr, queries) => {
  let res = [];
  
  for(let i of queries) {
    let pair = [];
    for(let j of i) { 
      pair.push(j);
    }  
    const start = pair.shift();
    const end = pair.pop();
    res.push(isMountain(arr, start, end));
  }
  
  return res;
} 

console.log(mountainSubArray([2,3,2,4,4,6,3,2], [[0,2],[1,3]]));

