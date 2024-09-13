/* WAP to find files extension */

const getExtension = (str) => (
    str.slice(str.lastIndexOf("."))
)

// const str = "haha.dat"
console.log(getExtension("haha.dat"));
// console.log(str.lastIndexOf("."));
// console.log(str.slice(4));

const getExtension2 = (str) => {
    const arr = str.split(".");
    const str2 = arr[-1]
    return str2
}

console.log(getExtension2("HAHA.Dat"));


