const compare = ((a,b) => {
  return b - a;
});
let arr = [1,2,3,4,5,6,7];
arr.sort(compare);
console.log(arr[2]);
