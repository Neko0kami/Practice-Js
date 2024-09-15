/* 
WAP to insert "New!" before a string if not present already,
if it's already there then do nothing
*/

const newStr = (str) => {if (str.indexOf("New!") === 0) {
    return str;
}else{
    return `New! ${str}`;
}}

console.log(newStr("Hola"));
// console.log(newStr("New! Hola"));
