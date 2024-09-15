/* 
WAP to concatinate two strings with their first letter removed
*/

const concat = (str1,str2) => {
    return str1.slice(0,str1.length-1) + str2.slice(1,str2.length);
}
console.log(concat("abc","dfg"));
console.log(concat("The","cat"));
