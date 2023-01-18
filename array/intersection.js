/* Returns the intesection count of two arbitrary arrays 
 * @param {number[]} arr1 The first array 
 * @param {number[]} arr2 The second array
 * @param {number} n Size of arr1
 * @param {number} m Size of arr2
 * @return {number} count The final count of common elements 
 */ 
const intersectionCount = (arr1, arr2, n, m) => {
  let count = 0;
  let s = new Set();

  for(let item of arr1)
    s.add(item);

  for(let item of arr2)

    if(s.has(item)) {
      count++;
      s.delete(item);
    }
    
	return count;
}

console.log(intersectionCount([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7], 6, 5));
