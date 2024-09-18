/* 
WAP to generate random hexadecimal color code
*/

const hexadecimal = () =>
    Math.floor(Math.random()*16).toString(16).toUpperCase()

const colorCode = () =>
    // creating a 6 length empty array and replacing with random hexadecimal
    `#${Array.from({length: 6}).map(hexadecimal).join("")}` 
console.log(colorCode());
