/*
WAP to take 3 chr from the start and 3 from start 
from a string and add them together 
*/

const newstr = (str) => {if (str.length >= 3) {
  return  str.slice(0,3) + str.slice(-3);    
} return str}

console.log(newstr("alhdjsfgs"));
console.log(newstr("aish"));
console.log(newstr("two"));
console.log(newstr("at"));
