/* 
WAP to convert csv values in 2D arrays
*/

const convToArr = (csv) => csv.split("\n").map(row => row.split(","));

const csv = `abc, def, ghi,
jkl, mno, pqr,
stu, vwx, yz`;

console.log(convToArr(csv));
