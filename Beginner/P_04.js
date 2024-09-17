/* 
WAP to get the current date.
Expected output: dd/mm/yyy , mm/dd/yyy or dd-mm-yyy , mm-dd-yyy
*/


const date = new Date()

console.log(date.toDateString());
console.log(date.toLocaleDateString());

// Alternate 

const formateDate = (date = new Date()) => {
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    console.log(`${day}/${month}/${year}`);
    
}

console.log(formateDate());

