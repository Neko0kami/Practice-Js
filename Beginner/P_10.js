/* 
WAP to see 2 to 4 occurence of a specified string
*/

const countChr = (str , chr) => 
    str.split("").filter(char => char === chr).length;

const count2and4 = (str,chr) => 
    countChr(str,chr) >= 2 && countChr(str,chr) <= 4;
        

console.log(count2and4("abcadfg","a"));
console.log(count2and4("ooh","o"));
console.log(count2and4("oooooh","o"));
console.log(count2and4("oooh","o"));
