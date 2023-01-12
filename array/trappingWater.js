/*  Returns the amount of water trapped in the given heights array
 *  @param {number[]} arr The heights array
 *  @return {number} units The final amt of water trapped
 */

const trappingWater = (arr)=> {
    
    let n = arr.length;
    let units = 0;
    
    // Constructing out the prefixMaximum array
    let preMax = new Array(n);
    preMax[0] = arr[0];
    
    // Constructing out the suffixMaximum array
    let sufMax = new Array(n);
    sufMax[n - 1] = arr[n - 1];
    
    
    for(let i = 1; i < n; i++) 
      preMax[i] = Math.max(preMax[i - 1], arr[i]);
    for(let i = n - 2; i >= 0; i--) 
      sufMax[i] = Math.max(sufMax[i + 1], arr[i]);
    for(let i = 0; i < n; i++) 
      units += Math.min(preMax[i], sufMax[i] ) - arr[i];
    
    return units;
} 

console.log(trappingWater([3, 0, 0, 2, 0, 4]));
