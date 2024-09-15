/*
WAP to find a number nearest to 100
*/ 

const diff = (num,) => {
    if (num > 100) {
        return num - 100
    } return 100 - num
}

const nearestTo100 = (num1,num2) => {
    const diff1 = diff(num1)
    const diff2 = diff(num2)
    if (diff1 < diff2) {
        return `${num1} is nearest to 100`
    } if (diff1 > diff2) {
        return `${num2} is nearest to 100`
    }return "both are equally nearest"
}

console.log(nearestTo100(69,87));
console.log(nearestTo100(154,46));
console.log(nearestTo100(154,45));
