/*
WAP to find even values upto a given number
*/

const countEven = (arr) => arr.filter(num => num%2 === 0).length;

const createRange = (num) => {
    const arr = []; 
    for(let i = 1; i <= num; i+=1){
        arr.push(i);
    }
    return countEven(arr); 
}

console.log(createRange(10));
console.log(createRange(20));
