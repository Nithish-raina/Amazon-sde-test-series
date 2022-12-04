const largestAndSecondLargest= (arr) => {
  let max1 = -1, max2 = -1;
  for(let item of arr) {
    if(item > max1)
      max1 = item;
  }
  for(let item of arr) {
    if(item != max1 && item > max2) 
      max2 = item;
  }
  return [max1,max2];
}
console.log(largestAndSecondLargest([2,1,2,1,0]));
