/* 
WAP to find  a given year is leap year
*/

const isLeapYear = (year) => year%4 === 0;

console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1956));
console.log(isLeapYear(2006));
