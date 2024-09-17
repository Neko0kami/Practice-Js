/*
WAP to see if a given array is sorted in ascending order 
*/

const checkAscending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true;
}

console.log(checkAscending([1,3,2,4,5]));
