/* 
WAP in which a function returns true if a function provided in it
returs true, else return false
*/

const checkFunc = (arr,func) => {
    for (let index = 0; index < arr.length; index++) {
        if (!func(arr[index])) {
            return false
        }
    }
    return true
};

console.log(checkFunc([1,2,3,4], (x => x > 0)));
console.log(checkFunc([1,2,3,4], (x => x > 3)));
