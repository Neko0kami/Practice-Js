/* WAP to check two numbers and return true if the sum of the two numebers is 100*/

const sumIs100 = (a, b) => {
        if (a + b === 100) {
            return true;
        } return false;
    }



const equal100 = (a,b) => (a === 100 || b === 100);

console.log(equal100(0, 100))

// Alternative

const sum = (a,b) => (a === 100 || b === 100 || a+b === 100)

console.log(sum(0,100));
console.log(sum(100,0));
