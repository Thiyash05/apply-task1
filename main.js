//Output:[ 1, 2, 3, 4, 5, 6 ] Use apply method

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr,numbers)
console.log(arr)