/*
WAP to find the largest even number in an array of integers
*/

const evenArray = (arr) => {
   const evenArr = arr.filter(num => num%2 === 0).sort((a,b) => b - a);
   return evenArr[0];
}


console.log(evenArray([1,2,3,4,5,6]));

// Alternate

const evenArray2 = (arr) => 
    Math.max(...arr.filter(num => num%2 === 0));


console.log(evenArray2([1,2,3,4,5,6]));
