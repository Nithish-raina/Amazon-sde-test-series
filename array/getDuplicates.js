/**  Returns duplicates of the given 0...N-1 array else returns [-1]
  *  @param { number[] } arr The input array
  * `@return { nuumber[] } res The array containing duplicates`
  */
  
const getDups = (arr) => {
  let dups = {};
  
  for(let item of arr) {
  
  if(dups[item] === undefined) 
    dups[item] = 1;
  else
    dups[item] += 1;
  }

  let res = [];

  for(let item in dups) {
    if(dups[item] > 1)
      res.push(+item);
  }

  return res.length === 0 ? [-1] : res;
}

console.log(getDups([1,2,3,3,1]));
