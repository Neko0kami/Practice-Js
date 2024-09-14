// WAP to replace every chr in a given string with the chr following it in the alphabet

const nextchr = (str) => str.split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("")


// console.log(nextchr("zbc"));

// const str = "a"

// const code = str.charCodeAt(0)+1 #gives chrCode
// console.log(str.charAt(0)); #takes index

// Alternative

const idk = (str) => str.split("")
    .map(char => {
        if (char !== "z") {
            return String.fromCharCode(char.charCodeAt(0) + 1)
        } else {
            return "a"
        }
    }).join("")

console.log(idk("abz"));

