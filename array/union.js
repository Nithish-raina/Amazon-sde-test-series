/* Returns the union of two given sorted arrays 
 * @param {number[]} arr1 The first sorted array 
 * @param {number[]} arr2 The second sorted array
 * @param {number} n Size of arr1
 * @param {number} m Size of arr2
 * @return {number[]} uni The final resultant array 
 */ 
const union = (arr1, arr2, n, m) => {
  let uni = [];
  let i = 0, j = 0;

  while(i < n && j < m) {

    if(arr1[i] < arr2[j]) {
      uni.push(arr1[i++]);
      // Pointing i to a next distinct element to avoid duplicates
      while(i < n && arr1[i] == arr1[i - 1]) i++;
    }
    else if(arr1[i] > arr2[j]) {
      uni.push(arr2[j++]);
      while(j < m && arr2[j] == arr2[j - 1]) j++;
    }
    else {
      uni.push(arr1[i++]);
      j++;
      while(i < n && arr1[i] == arr1[i - 1]) i++;
      while(j < m && arr2[j] == arr2[j - 1]) j++;
    }
  }

  while(i < n) {
    uni.push(arr1[i++]);
    while(i < n && arr1[i] == arr1[i - 1]) i++;
  }

  while(j < m) {
    uni.push(arr2[j++]);
    while(j < m && arr2[j] == arr2[j - 1]) j++;
  }

  return uni; 
}

console.log(union([2, 2, 3, 4, 5], [1, 1, 2, 3, 4], 5, 5));
