/*
WAP to find no. of even nums in an array
*/

const countEven = (arr) => arr.filter(num => num%2 === 0).length

console.log(countEven([1,2,3,4,5,6]));
console.log(countEven([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
