/*
WAP to compare properties of two objetcts
wether they are similar or not
*/

const isSimilar = (obj1,obj2) => {
    return Object.keys(obj1).every(key => obj2[key])
}
    


const objA = {a:1, b:2, c:3}
const objB = {a:1, b:3, c:1}
const objC = {a:1, c:2, d:3}

console.log(isSimilar(objA, objB));
console.log(isSimilar(objA, objC));
console.log(isSimilar(objB, objC));
