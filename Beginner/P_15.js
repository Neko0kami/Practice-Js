/*
WAP to replace first digit in a string with "$" character
*/

const replaceNum = (str) => str.replace(/[0-9]/,"$")

console.log(replaceNum("Abcsd1fek"));
console.log(replaceNum("Ab1csd1fek"));
console.log(replaceNum("Abcsd2155fek"));


// to replace every digit

const replaceNum2 = (str) => str.replace(/[0-9]/g,"$") // "g" is for global

console.log(replaceNum2("Abcsd1fek"));
console.log(replaceNum2("Ab1csd1fek"));
console.log(replaceNum2("Abcsd2155fek"));
