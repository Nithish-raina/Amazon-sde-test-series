/** Returns an array containing no duplicates
 *  @param  { number[] } arr The input array
 *  @return { number[] } arr The resultant array
 */
const remDups = (arr) => {
  let hash = {};
  const resArr = [];
  for(let ele of arr) {
    if(hash[ele] === undefined)    
      hash[ele] = 1;
    else 
      hash[ele] += 1;
    if(hash[ele] === 1)
      resArr.push(ele);
  }
  return resArr;
}
console.log(remDups([2,2,3,4,5,5,6,7,4,5]));
