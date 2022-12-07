const maxPathSum = (arr1, arr2) => {
  let i = 0, j = 0, m = arr1.length, n = arr2.length;
  let sum1 = 0, sum2 = 0, res = 0;
  while(i < m && j < n) {
    if(arr1[i] > arr2[j]) 
      sum2 += arr2[j++];
    else if(arr1[i] < arr2[j]) 
      sum1 += arr1[i++];
    else {
      res += Math.max(sum1, sum2) + arr1[i];
      sum1 = 0, sum2 = 0;
      i++,j++;
    }
  }
  while(i < m) 
    sum1 += arr1[i++];
  while(j < n) 
    sum2 += arr2[j++];
  res += Math.max(sum1, sum2);
  return res;
}

console.log(maxPathSum([1,3,5,7,9], [3,5,100]));
